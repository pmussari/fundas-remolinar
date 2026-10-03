const TEXT =
  "★ Hecho en Argentina ★ Para platillos hasta 22\" ★ Correa mochila regulable ★ Enviamos a todo el país ";

export default function Marquee() {
  // Two copies side by side so translateX(-50%) loops seamlessly.
  const repeated = TEXT.repeat(4);
  return (
    <div className="relative z-10 -mt-1.5 -mx-5 -rotate-1 overflow-hidden whitespace-nowrap bg-hi text-on-hi py-2.5 label">
      <div className="inline-block animate-marquee">
        <span>{repeated}</span>
        <span>{repeated}</span>
      </div>
    </div>
  );
}
