import { IG_LINK, WA_LINK } from "../lib/whatsapp";

export default function Contact() {
  return (
    <section id="contacto" className="px-4 md:px-6 py-16 md:py-25 text-center">
      <p className="label text-mute">¿No sabés cuál elegir?</p>
      <h2 className="display text-[clamp(48px,11vw,170px)] mt-4 mb-8">
        Escribinos
        <br />
        <span className="text-hi">al toque</span>
      </h2>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="label font-bold inline-block bg-hi text-on-hi px-7 py-4 w-full md:w-auto transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-ink)]"
      >
        WhatsApp +54 11 3619-4442 →
      </a>
      <p className="label mt-6 text-mute">
        o seguinos en{" "}
        <a
          href={IG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline underline-offset-4 hover:text-hi"
        >
          @remolinar.music
        </a>
      </p>
    </section>
  );
}
