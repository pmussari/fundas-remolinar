import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

interface ProductsSectionProps {
  products: Product[];
}

export default function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section id="modelos">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          total={products.length}
        />
      ))}
    </section>
  );
}
