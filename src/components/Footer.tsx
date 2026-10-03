import { IG_LINK, WA_LINK } from "../lib/whatsapp";

export default function Footer() {
  return (
    <footer className="px-4 md:px-6 pt-14 md:pt-20 pb-5 md:pb-6 overflow-hidden">
      <div className="display text-hi whitespace-nowrap text-[clamp(60px,17vw,260px)]">
        Remolinar
      </div>
      <div className="label flex justify-between flex-wrap gap-2 mt-8 border-t border-line pt-4 text-mute">
        <span>&copy; 2026 Fundas Remolinar</span>
        <span className="flex gap-4">
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-hi transition-colors"
          >
            Instagram
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-hi transition-colors"
          >
            WhatsApp
          </a>
        </span>
      </div>
    </footer>
  );
}
