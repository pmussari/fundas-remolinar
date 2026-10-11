import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Ruta base configurable con VITE_BASE_PATH (ej: "/" o "/fundas-remolinar/").
// Si no está definida: Vercel (VERCEL=1) sirve en la raíz; el resto (GitHub Pages) en /fundas-remolinar/.
export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), 'VITE_'), ...process.env }
  const raw = env.VITE_BASE_PATH ?? (env.VERCEL ? '/' : '/fundas-remolinar/')
  // Normaliza para que siempre empiece y termine con "/"
  const base = `/${raw.replace(/^\/+|\/+$/g, '')}/`.replace(/^\/\/$/, '/')

  return {
    base,
    plugins: [react(), tailwindcss()],
  }
})
