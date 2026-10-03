const WA_NUMBER = "541136194442";

export const WA_LINK = `https://wa.me/${WA_NUMBER}`;

export function waLinkFor(productName: string): string {
  return `${WA_LINK}?text=${encodeURIComponent(`Hola! Quiero la ${productName}`)}`;
}

export const IG_LINK = "https://www.instagram.com/remolinar.music/";
