const SPECS = [
  { label: "Medida", value: "Hasta 22\"" },
  { label: "Transporte", value: "Correa mochila" },
  { label: "Diseño", value: "Diseños únicos" },
  { label: "Envíos", value: "Todo el país" },
];

export default function Specs() {
  return (
    <section id="specs" className="bg-ink text-black px-4 md:px-6 py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="display text-[clamp(48px,9vw,130px)] mb-10">
          Diseño y
          <br />
          materiales
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 border-t-2 border-black">
          {SPECS.map((s) => (
            <div key={s.label} className="py-5 pr-4 border-b border-black/20">
              <span className="label">{s.label}</span>
              <b className="display block font-normal text-3xl md:text-[44px] mt-2">
                {s.value}
              </b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
