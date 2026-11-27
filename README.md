# Valley Glass Lodge

Landing page de Valley Glass Lodge, construida con Next.js y React.

## Desarrollo local

Requisitos: Node.js 20 o posterior y npm.

```powershell
npm ci
npm run dev
```

Abre `http://localhost:3000`. Para revisar el código y generar la versión de producción:

```powershell
npm run lint
npm run build
npm start
```

## Despliegue en Vercel

1. Importa el repositorio de GitHub `ValleyGlassLodge/frontendunificado` en Vercel y selecciona la rama que quieres publicar (actualmente `develop`).
2. Deja **Framework Preset** en `Next.js`, **Root Directory** en `.` y los comandos de instalación y compilación en detección automática. El proyecto ya declara `build` como `next build`; deja el directorio de salida predeterminado de Next.js.
3. Si el dominio canónico será distinto de `https://valleyglasslodge.com`, define `NEXT_PUBLIC_SITE_URL` con la URL correcta en **Settings → Environment Variables** para Production y Preview. La aplicación usa ese valor en metadatos SEO y datos estructurados.
4. Haz deploy. Los siguientes pushes a la rama conectada crean despliegues automáticamente.

No se requiere `vercel.json` para esta configuración estándar de Next.js. No configures `NEXT_PUBLIC_SITE_URL` con datos secretos: las variables con prefijo `NEXT_PUBLIC_` pueden incorporarse al código del navegador.

## Notas del proyecto

- App Router en `app/`; los metadatos globales están en `app/layout.jsx`.
- La página y sus datos estructurados están en `app/page.jsx`.
- La escena interactiva de amanecer y atardecer está en `app/sky-experience.jsx`.
- Estilos globales y adaptaciones responsivas están en `app/globals.css`.
- Recursos estáticos se sirven desde `public/`.
