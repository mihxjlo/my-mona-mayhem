# Project instructions

## Overview

This repository is intended for an Astro web application. The repository is
currently an empty scaffold, so there is no application source, package
manifest, or configured build pipeline to inspect yet. Treat workshop material
as out of scope unless a task explicitly says otherwise.

## Development commands

Run these commands from the repository root after the Astro app is scaffolded
and dependencies are installed:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Use the scripts defined in `package.json` as the source of truth if they differ
from these defaults. Run the project's available checks before finishing a
change.

The GitHub contribution proxy is available at
`GET /api/contributions/{username}` (with `/api/github/{username}` retained as
an alias). It validates the username, fetches
`https://github.com/{username}.contribs` server-side, returns a stable JSON
error shape for failures, and applies shared-cache headers to successful
responses.

## Astro best practices

- Keep route pages in `src/pages/`; use `.astro` files for server-rendered
  page composition.
- Put reusable UI in `src/components/` and layouts in `src/layouts/`.
- Keep static files such as images and favicons in `public/`; import assets
  from `src/` when they should be processed by Astro.
- Prefer Astro components and server-rendered HTML by default. Add client-side
  JavaScript only when interaction requires it, using the smallest suitable
  `client:*` directive.
- Use typed frontmatter and explicit component props. Keep data fetching in
  frontmatter or server-only code rather than shipping secrets to the browser.
- Use content collections for structured editorial content and define schemas
  for their frontmatter.
- Preserve accessible HTML semantics, keyboard support, labels, alt text, and
  visible focus states.
- Reuse existing project utilities and styling conventions before adding new
  dependencies or abstractions.
- Keep secrets in environment variables and never commit `.env` files or
  generated build output.
