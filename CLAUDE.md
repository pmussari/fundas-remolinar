# CLAUDE.md — Fundas Remolinar

## Descripción del proyecto

SPA en React 19 + TypeScript + Vite. El catálogo de productos vive en `src/data/products.json` y los componentes lo leen para renderizar las secciones dinámicamente.

## Stack

- **React 19 + TypeScript** — componentes en `src/components/`
- **Vite** — dev server y build (plugin `@tailwindcss/vite`)
- **Tailwind CSS v4** — tokens definidos en `src/index.css` bajo `@theme`

## Reglas de trabajo

- El catálogo es la **única fuente de verdad**: para agregar/editar productos solo se toca `src/data/products.json`.
- Los tipos TypeScript viven en `src/types/product.ts` — mantenerlos sincronizados con el JSON.
- **No usar `any`** — el cast en `App.tsx` es el único permitido para la importación del JSON.
- **Idioma**: todo el contenido visible en español (Argentina).

## Convenciones de estilo

Diseño "backstage / editorial": fondo casi negro, tipografía gigante en mayúsculas, un único acento amarillo.

- **Colores**: usar los tokens de `@theme` (`bg-bg`, `text-ink`, `text-mute`, `border-line`, `bg-hi`, `text-on-hi`). Hex directo solo para transparencias.
- **Tipografías**: Anton → `.display` (títulos, ya incluye mayúsculas y line-height); Space Mono → `.label` (etiquetas); Inter → cuerpo. Los `<link>` de Google Fonts están en `index.html`.
- **Border-radius**: forzado a `0px`. No usar `rounded-*` salvo `rounded-full`.
- **Mobile first**: cada componente debe verse bien a 390px (padding lateral `px-4`, botones a ancho completo, carrusel con swipe).

## Componentes

| Archivo | Responsabilidad |
|---|---|
| `App.tsx` | Carga `products.json` y arma la página |
| `Navbar.tsx` | Barra fija con botón de WhatsApp |
| `Hero.tsx` | Hero a pantalla completa (estático) |
| `Marquee.tsx` | Cinta amarilla con textos en movimiento |
| `Manifesto.tsx` | Sección "Por qué la hicimos" |
| `ProductsSection.tsx` | Itera productos y renderiza `ProductCard` |
| `ProductCard.tsx` | Producto numerado: nombre gigante, `Carousel`, descripción y botón de WhatsApp prellenado |
| `Carousel.tsx` | Tira horizontal con scroll-snap (sin estado) |
| `Specs.tsx` | "Diseño y materiales" (medida, transporte, diseño, envíos) |
| `Contact.tsx` | CTA final de WhatsApp |
| `Footer.tsx` | Footer (estático) |

## WhatsApp

Número: `+541136194442`. `src/lib/whatsapp.ts` exporta `WA_LINK` y `waLinkFor(nombre)`, que prellena el mensaje con el nombre de la funda.

## Imágenes

- Las fotos de producto están recortadas sobre fondo gris de estudio en `public/static/cut/<id>.jpg` (3/4, 1200x1600). Los originales siguen en `public/static/`.
- El Hero usa la foto original `IMG_4432 Medium.jpeg`.
- Para productos nuevos, recortar la foto con el mismo estilo para mantener la consistencia.
- El HTML original está preservado en `index.html.bak` como referencia.
