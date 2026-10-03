export interface CarouselImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  categoryLabel: string;
  description: string;
  imageAspect: string;
  images: CarouselImage[];
}
