export default function Hero() {
  return (
    <header className="relative min-h-svh flex flex-col justify-end overflow-hidden px-4 md:px-6 pt-20 pb-4 md:pb-6">
      <img
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-50"
        src={`${import.meta.env.BASE_URL}static/${encodeURIComponent("IMG_4432 Medium.jpeg")}`}
        alt="Funda para platillos de batería"
      />
      <h1 className="display relative text-[19vw] md:text-[clamp(52px,12.5vw,210px)] mb-5">
        Fundas para
        <br />
        <span className="text-hi">platillos</span>
      </h1>
      <div className="relative label flex justify-between gap-4 flex-wrap border-t border-ink pt-3 text-[10px]! md:text-xs!">
        <span>
          Diseños únicos<span className="hidden md:inline"> · Buenos Aires</span>
        </span>
        <span className="hidden md:inline">Hasta 22"</span>
        <span>Correa mochila ↓</span>
      </div>
    </header>
  );
}
