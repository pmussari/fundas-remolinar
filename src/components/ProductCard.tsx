import type { Product } from "../types/product";
import { waLinkFor } from "../lib/whatsapp";
import Carousel from "./Carousel";

interface ProductCardProps {
  product: Product;
  index: number;
  total: number;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProductCard({ product, index, total }: ProductCardProps) {
  return (
    <article className="group border-t border-line max-w-[1400px] mx-auto pt-6 md:pt-8 pb-10 md:pb-14 md:px-6">
      <div className="flex justify-between items-start gap-4 px-4 md:px-0">
        <h2 className="display text-[clamp(48px,10vw,150px)] transition-colors group-hover:text-hi">
          <span className="label text-hi block mb-2">
            {pad(index + 1)} / {pad(total)}
          </span>
          {product.name}
        </h2>
        <span className="label hidden md:block text-right">
          {product.categoryLabel}
        </span>
      </div>

      <Carousel images={product.images} aspect={product.imageAspect} />

      <div className="flex flex-wrap items-center justify-between gap-4 md:gap-6 px-4 md:px-0">
        <div className="w-full md:w-auto">
          <p className="max-w-[520px] text-[15px] md:text-base text-mute leading-normal">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3 label text-mute">
            <span className="border border-mute px-2.5 py-1 md:hidden">
              {product.categoryLabel}
            </span>
            <span className="border border-mute px-2.5 py-1">Hasta 22"</span>
          </div>
        </div>
        <a
          href={waLinkFor(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="label font-bold bg-hi text-on-hi px-7 py-4 w-full md:w-auto text-center transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-ink)]"
        >
          Pedir por WhatsApp →
        </a>
      </div>
    </article>
  );
}
