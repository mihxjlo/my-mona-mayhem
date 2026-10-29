import type { APIRoute } from 'astro';

const UPSTREAM_TIMEOUT_MS = 5_000;
const CACHE_MAX_AGE_SECONDS = 300;
const CACHE_STALE_WHILE_REVALIDATE_SECONDS = 600;
const USERNAME_PATTERN = /^[A-Za-z0-9-]+$/;

type ErrorCode =
  | 'invalid_username'
  | 'method_not_allowed'
  | 'upstream_not_found'
  | 'upstream_rate_limited'
  | 'upstream_timeout'
  | 'upstream_unavailable'
  | 'upstream_invalid_response';

function jsonResponse(
  body: unknown,
  status: number,
  headers: Record<string, string> = {},
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers,
    },
  });
}

function errorResponse(
  code: ErrorCode,
  message: string,
  status: number,
  headers: Record<string, string> = {},
): Response {
  return jsonResponse({ error: { code, message } }, status, headers);
}

function isValidUsername(username: string): boolean {
  return (
    username.length >= 1 &&
    username.length <= 39 &&
    USERNAME_PATTERN.test(username) &&
    !username.startsWith('-') &&
    !username.endsWith('-') &&
    !username.includes('--')
  );
}

function getUpstreamStatus(status: number): {
  code: ErrorCode;
  message: string;
  status: number;
} {
  if (status === 404) {
    return {
      code: 'upstream_not_found',
      message: 'GitHub contribution data was not found.',
      status: 404,
    };
  }

  if (status === 429) {
    return {
      code: 'upstream_rate_limited',
      message: 'GitHub rate-limited the contribution data request.',
      status: 429,
    };
  }

  return {
    code: 'upstream_unavailable',
    message: 'GitHub contribution data is temporarily unavailable.',
    status: 502,
  };
}

export const GET: APIRoute = async ({ params }) => {
  const username = params.username?.trim() ?? '';

  if (!isValidUsername(username)) {
    return errorResponse(
      'invalid_username',
      'Username must be 1-39 characters and contain only letters, numbers, and single hyphens.',
      400,
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

  try {
    const upstreamResponse = await fetch(
      `https://github.com/${encodeURIComponent(username)}.contribs`,
      {
        headers: {
          Accept: 'application/json',
        },
        signal: controller.signal,
      },
    );

    if (!upstreamResponse.ok) {
      const upstreamError = getUpstreamStatus(upstreamResponse.status);
      return errorResponse(upstreamError.code, upstreamError.message, upstreamError.status);
    }

    try {
      const data: unknown = await upstreamResponse.json();

      return jsonResponse(data, 200, {
        'Cache-Control': `public, s-maxage=${CACHE_MAX_AGE_SECONDS}, stale-while-revalidate=${CACHE_STALE_WHILE_REVALIDATE_SECONDS}`,
      });
    } catch {
      return errorResponse(
        'upstream_invalid_response',
        'GitHub returned an invalid contribution response.',
        502,
      );
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return errorResponse(
        'upstream_timeout',
        'GitHub did not respond before the request timed out.',
        504,
      );
    }

    return errorResponse(
      'upstream_unavailable',
      'GitHub contribution data is temporarily unavailable.',
      502,
    );
  } finally {
    clearTimeout(timeout);
  }
};

export const ALL: APIRoute = ({ request }) =>
  errorResponse('method_not_allowed', `Method ${request.method} is not allowed. Use GET.`, 405, {
    Allow: 'GET',
  });
