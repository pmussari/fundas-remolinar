import { WA_LINK } from "../lib/whatsapp";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 bg-bg/80 backdrop-blur-md border-b border-line">
      <a href="#" className="font-display text-lg md:text-xl tracking-wide">
        REMOLINAR
      </a>
      <div className="hidden md:flex gap-6 label">
        <a href="#modelos">Modelos</a>
        <a href="#specs">Diseño</a>
        <a href="#contacto">Comprar</a>
      </div>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="label bg-hi text-on-hi font-bold px-3.5 py-2"
      >
        WhatsApp
      </a>
    </nav>
  );
}
