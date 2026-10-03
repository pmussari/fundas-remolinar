# Fundas Remolinar

Landing page / tienda online para **Fundas Remolinar**, marca argentina de fundas protectoras artesanales para platillos de batería.

## Stack

| Tecnología | Uso |
|---|---|
| React 19 + TypeScript | UI y componentes |
| Vite | Dev server y build |
| Tailwind CSS v4 | Estilos y layout |
| [Material Symbols](https://fonts.google.com/icons) | Íconos (chevrons del carrusel) |
| [Google Fonts](https://fonts.google.com/) | Tipografías Manrope e Inter |

## Estructura del proyecto

```
fundas-remolinar/
├── index.html                  # Shell HTML (head: meta, fonts)
├── src/
│   ├── main.tsx                # Entry point
│   ├── App.tsx                 # Raíz: carga productos y arma layout
│   ├── index.css               # Tailwind @theme tokens + estilos globales
│   ├── data/
│   │   └── products.json       # Catálogo de productos (fuente de verdad)
│   ├── types/
│   │   └── product.ts          # Tipos TypeScript
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── ProductsSection.tsx
│       ├── ProductCard.tsx
│       └── Carousel.tsx
│       └── Footer.tsx
└── index.html.bak              # HTML estático original (referencia)
```

## Agregar o editar productos

Editar `src/data/products.json`. Cada producto tiene:

```jsonc
{
  "id": "slug-unico",
  "name": "Nombre del Producto",
  "categoryLabel": "Categoría visible",
  "description": "Descripción corta.",
  "imageAspect": "4/5",        // aspect-ratio del carrusel
  "images": [
    { "src": "url-imagen", "alt": "descripción" }
  ]
}
```

Los productos se renderizan en orden; los de índice impar tienen la imagen a la derecha.

## Comandos

```bash
npm run dev      # Inicia dev server en http://localhost:5173
npm run build    # Build de producción en dist/
npm run preview  # Preview del build
```

## Flujo de compra

Cada producto tiene un botón "Comprar producto" que abre WhatsApp (`wa.me/+541136194442`) para cerrar la venta por mensaje.

## Diseño

- Tema oscuro con fondo `#131313`, paleta dorada `#f2ca50 / #d4af37`.
- Tokens de color definidos en `src/index.css` bajo `@theme`.
- Tipografías: **Manrope** (headline/body) + **Inter** (labels).
- `border-radius: 0` global — estética editorial/galería.

## Deploy

Build estático — se puede deployar en GitHub Pages, Netlify, Vercel, o cualquier CDN.
