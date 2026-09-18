import { useState } from "react";
import { Heart, Sparkles, Check } from "lucide-react";
import type { Product } from "../data/content";
import { useStore } from "../store";
import { Photo } from "./Photo";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index?: number;
}) {
  const { addToCart, toggleWishlist, wishlist, setModalProduct } = useStore();
  const wished = wishlist.includes(product.id);
  const [addedAnim, setAddedAnim] = useState(false);
  const n = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  const handleAdd = () => {
    addToCart(product);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1400);
  };

  return (
    <article className="group flex flex-col justify-between">
      {/* Visual Image Container with Tactile Frame */}
      <div className="relative overflow-hidden bg-[#ece5d8] border border-[#13201c]/8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:shadow-[0_16px_32px_-8px_rgba(19,32,28,0.08)]">
        <button
          type="button"
          className="block w-full text-left focus:outline-none"
          onClick={() => setModalProduct(product)}
          aria-label={`View ritual details for ${product.name}`}
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <Photo
              src={product.image}
              alt={product.name}
              sizes="(min-width: 1280px) 24vw, (min-width: 640px) 45vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover transition-[transform,opacity] duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:opacity-0 brightness-[0.98]"
            />
            <Photo
              src={product.hoverImage}
              alt=""
              sizes="(min-width: 1280px) 24vw, (min-width: 640px) 45vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover scale-[1.03] opacity-0 transition-[transform,opacity] duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:opacity-100 brightness-[0.98]"
            />

            {/* Tactile Inner Vignette Shadow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          </div>
        </button>

        {/* Index Tag / Batch Number */}
        <div className="pointer-events-none absolute left-3.5 top-3.5 flex items-center gap-2">
          {n && (
            <span className="bg-[#faf8f5]/85 px-2 py-0.5 text-[8.5px] font-sans tracking-[0.24em] text-[#13201c] backdrop-blur-sm border border-[#13201c]/10">
              {n}
            </span>
          )}
          {product.batch && (
            <span className="hidden sm:inline-block bg-[#13201c]/60 px-2 py-0.5 text-[8px] font-sans tracking-[0.22em] text-[#faf8f5] backdrop-blur-sm">
              {product.batch}
            </span>
          )}
        </div>

        {/* Wishlist Icon */}
        <button
          type="button"
          aria-label={wished ? "Remove from saved rituals" : "Save to wishlist"}
          aria-pressed={wished}
          onClick={() => toggleWishlist(product.id)}
          className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#faf8f5]/80 text-[#13201c] backdrop-blur-sm transition-all duration-300 hover:bg-[#faf8f5] hover:scale-110 border border-[#13201c]/10"
        >
          <Heart size={14} fill={wished ? "currentColor" : "none"} strokeWidth={1.3} />
        </button>

        {/* Scent Pyramid Pill Revealed on Hover */}
        {product.notes && (
          <div className="pointer-events-none absolute bottom-3 left-3 right-3 hidden translate-y-2 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100 sm:block">
            <div className="bg-[#faf8f5]/92 backdrop-blur-md p-2.5 text-[9px] border border-[#13201c]/10">
              <div className="flex items-center gap-1.5 text-[#8a7356] font-medium tracking-wider uppercase mb-1">
                <Sparkles size={10} />
                <span>Scent Notes</span>
              </div>
              <p className="text-[#2b2824] truncate">
                {product.notes.top} · {product.notes.heart} · {product.notes.base}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Product Content & Typography */}
      <div className="pt-5 flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-[9px] tracking-[0.24em] text-[#8a7356] uppercase font-sans">
            {product.skinType || "Botanical Formulation"}
          </p>
          {product.weight && (
            <p className="text-[9px] tracking-[0.18em] text-[#9c958a] font-sans">
              {product.weight}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => setModalProduct(product)}
          className="mt-1.5 text-left focus:outline-none"
        >
          <h3 className="font-serif text-[24px] md:text-[26px] leading-tight text-[#13201c] font-light group-hover:italic transition-all duration-500">
            {product.name}
          </h3>
        </button>

        <p className="mt-2 text-[13px] leading-relaxed text-[#6e675e] font-light line-clamp-2">
          {product.short}
        </p>

        {/* Footer of Card: Ingredients & Add Trigger */}
        <div className="mt-auto pt-5 flex items-center justify-between gap-4 border-t border-[#13201c]/8">
          <span className="font-serif text-lg text-[#13201c]">
            ${product.price}
          </span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setModalProduct(product)}
              className="text-[9.5px] tracking-[0.22em] text-[#9c958a] uppercase hover:text-[#13201c] transition-colors"
            >
              Ritual
            </button>
            <span className="text-[#9c958a]/40">·</span>
            <button
              type="button"
              onClick={handleAdd}
              disabled={addedAnim}
              className="inline-flex items-center gap-1.5 text-[9.5px] tracking-[0.24em] text-[#13201c] uppercase font-medium link-underline"
            >
              {addedAnim ? (
                <>
                  <Check size={11} className="text-[#678478]" />
                  <span>Added</span>
                </>
              ) : (
                <span>Reserve</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
