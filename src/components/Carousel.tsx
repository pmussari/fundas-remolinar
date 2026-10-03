import type { CarouselImage } from "../types/product";

const BASE = import.meta.env.BASE_URL;

function resolveImageSrc(src: string): string {
  if (src.startsWith("http")) return src;
  // Encode each path segment to handle spaces and special chars in filenames
  const encoded = src.split("/").map(encodeURIComponent).join("/");
  return `${BASE}${encoded}`;
}

interface CarouselProps {
  images: CarouselImage[];
  aspect: string;
}

// Horizontal scroll-snap strip: native swipe on mobile, drag/scroll on desktop.
export default function Carousel({ images, aspect }: CarouselProps) {
  return (
    <div className="flex gap-1.5 md:gap-2 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 md:px-0 scroll-pl-4 my-4 md:my-6">
      {images.map((img) => (
        <img
          key={img.src}
          src={resolveImageSrc(img.src)}
          alt={img.alt}
          loading="lazy"
          style={{ aspectRatio: aspect }}
          className="flex-none snap-start object-cover w-[78vw] md:w-auto md:h-[min(70vh,560px)]"
        />
      ))}
    </div>
  );
}
