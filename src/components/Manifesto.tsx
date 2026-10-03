export default function Manifesto() {
  return (
    <section className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_2fr] gap-6 px-5 md:px-6 pt-18 md:pt-30 pb-12 md:pb-20">
      <span className="label text-mute">/ Por qué la hicimos</span>
      <p className="text-[clamp(22px,3vw,38px)] leading-tight font-semibold">
        Tus platillos se mueven con vos.{" "}
        <em className="not-italic text-hi">Una funda de diseño único</em>,
        hecha con materiales de calidad y pensada para bancarse el ritmo de
        cada ensayo, cada fecha y cada viaje.
      </p>
    </section>
  );
}
