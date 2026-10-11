# Deploy en Vercel + Analytics

## Ruta base (`base`)

`vite.config.ts` resuelve la ruta base así:

1. `VITE_BASE_PATH` si está definida (ej: `/` o `/otra-ruta/`; se normaliza con `/` al inicio y al final).
2. `/` si el build corre en Vercel (Vercel define `VERCEL=1`).
3. `/fundas-remolinar/` en cualquier otro caso (GitHub Pages).

En Vercel no hace falta configurar nada. Para usar otra ruta, definir `VITE_BASE_PATH` en
*Project → Settings → Environment Variables* y volver a deployar.

## Vercel Analytics

El proyecto usa [`@vercel/analytics`](https://vercel.com/docs/analytics/quickstart). Como es una SPA de Vite
(no Next.js), se usa el entry point de React:

```tsx
// src/App.tsx
import { Analytics } from "@vercel/analytics/react";
// ...
<Analytics />
```

Pasos realizados:

1. `npm i @vercel/analytics`
2. Importar `Analytics` y renderizar `<Analytics />` al final de `App` (después de `<Footer />`).

### Activarlo

1. En el dashboard de Vercel: *Project → Analytics → Enable*.
2. Redeployar. Las visitas aparecen en la pestaña *Analytics* a los pocos minutos.

> El script de tracking solo existe en Vercel: en local o en GitHub Pages el componente no envía datos.
