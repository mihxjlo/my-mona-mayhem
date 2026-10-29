<!-- l10n-sync: source-file="workshop/00-overview.md" -->
# 🎮 Mona Mayhem — Taller de GitHub Copilot

---

> **Duración:** ~1 hora  
> **Nivel:** Intermedio  
> **Pila:** Astro / Node.js / TypeScript

Construye una aplicación retro de estilo arcade para comparar las contribuciones de GitHub — **Mona Mayhem** — mientras aprendes todo el abanico de flujos de trabajo de GitHub Copilot. El taller admite **dos itinerarios**: una experiencia con VS Code y otra con GitHub Copilot CLI.

---

## 🎯 Elige tu itinerario

- **Itinerario de VS Code** — trabaja dentro del editor y practica Chat, Plan Mode, Agent Mode, agentes en segundo plano y el ciclo de revisión integrado.
- **Itinerario de CLI** — trabaja desde el terminal y practica `copilot`, contexto con `@file`, `/plan`, ediciones autónomas, `/fleet`, `/delegate` y `/review`.

Sigue el itinerario que corresponda a tu flujo de trabajo preferido.

---

## 📋 Lista de comprobación rápida

Antes de empezar, comprueba lo siguiente:

- [ ] GitHub Copilot está habilitado para tu cuenta
- [ ] Node.js instalado
- [ ] Git instalado y configurado
- [ ] El navegador y el terminal están preparados

<!-- track:vscode:start -->
- [ ] VS Code **v1.107+** (sin actualizaciones pendientes)
- [ ] Sesión iniciada en la extensión **GitHub Copilot**
- [ ] Panel de Chat abierto y Agent listo
<!-- track:vscode:end -->

<!-- track:cli:start -->
- [ ] GitHub Copilot CLI instalada y disponible como `copilot`
- [ ] Sesión autenticada en la CLI con `/login`
- [ ] Familiaridad con comandos slash como `/help`, `/plan` y `/review`
<!-- track:cli:end -->

> 💡 **Consejo:** Usa el DevContainer para disponer de un entorno preconfigurado si quieres empezar rápidamente en VS Code.

---

## 🧠 Qué aprenderás

| N.º | Habilidad | Descripción |
|---|---|---|
| 1 | **Ingeniería de contexto** | Enseñar a Copilot cómo es tu base de código mediante instrucciones, referencias y restricciones claras |
| 2 | **Planificar primero** | Diseñar la arquitectura antes de implementar |
| 3 | **Implementación agéntica** | Dejar que Copilot realice trabajo de programación en varios pasos bajo tu supervisión |
| 4 | **Diseño iterativo** | Usar Copilot para transformar el aspecto visual y perfeccionar los detalles de interacción |
| 5 | **Flujos de trabajo paralelos** | Dividir el trabajo entre agentes, sesiones o tareas delegadas |

<!-- track:vscode:start -->
### Enfoque en las funciones de VS Code

- **Chat + modo Ask** para explorar
- **Plan Mode** para prompts de arquitectura y diseño
- **Agent Mode** para implementar en varios archivos
- **Agentes en segundo plano y en la nube** para pulir en paralelo
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Enfoque en las funciones de Copilot CLI

- **Sesiones interactivas de la CLI** con `copilot`
- **`/plan` y Shift+Tab** para planificar de forma estructurada
- **Ediciones autónomas** con aprobaciones en línea y `/diff`
- **`/fleet`, `/delegate` y `/review`** para el paralelismo y los controles de calidad
<!-- track:cli:end -->

---

## 📚 Partes del laboratorio

| Parte | Título | Descripción |
|------|-------|-------------|
| [**01**](01-setup.md) | Configuración e ingeniería de contexto | Crea tu repositorio, prepara el entorno y proporciona a Copilot el contexto adecuado |
| [**02**](02-plan-and-scaffold.md) | Planificación y estructura inicial | Diseña la API y la arquitectura de la página antes de implementar |
| [**03**](03-agent-mode.md) | Construir el juego | Conecta la página de batalla y los gráficos de contribuciones con ayuda agéntica |
| [**04**](04-design-vibes.md) | Tematización orientada al diseño | Convierte la estructura inicial en una experiencia de arcade retro |
| [**05**](05-polish.md) | Pulido y trabajo paralelo | Usa flujos multiagente para mejorar la UX, la resiliencia y la calidad |
| [**06**](06-bonus.md) | Bonificaciones y extensiones | Explora funcionalidades abiertas, flujos para compartir y experimentos adicionales |

---

## 💡 Consejos profesionales

1. **Mantén el navegador abierto** — observa las actualizaciones en directo mientras programas.
2. **Haz commits a menudo** — guarda puntos de control limpios mientras iteras.
3. **Perfecciona el plan antes de implementar** — los mejores planes producen mejores resultados.
4. **Revisa los cambios de Copilot** — usa la vista de diferencias o las herramientas de revisión de la CLI en lugar de aceptarlos a ciegas.

<!-- track:vscode:start -->
5. **Usa los puntos de control y Deshacer** en el chat si una iteración se desvía.
<!-- track:vscode:end -->

<!-- track:cli:start -->
5. **Usa `/session`, `/context` y `/share file`** cuando quieras inspeccionar o conservar tu trabajo.
<!-- track:cli:end -->
