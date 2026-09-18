import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Sparkles, X } from "lucide-react";
import { useStore } from "../store";

export function ProductModal() {
  const { modalProduct, setModalProduct, addToCart } = useStore();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(1);
  }, [modalProduct?.id]);

  return (
    <AnimatePresence>
      {modalProduct && (
        <>
          <motion.button
            aria-label="Close ritual details"
            className="fixed inset-0 z-[80] bg-[#13201c]/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalProduct(null)}
          />
          <motion.div
            role="dialog"
            aria-modal
            aria-labelledby="product-title"
            className="fixed inset-0 z-[81] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-[#faf8f5] shadow-[0_32px_80px_rgba(19,32,28,0.22)] border border-[#13201c]/12">
              <button
                className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#faf8f5]/80 text-[#13201c] backdrop-blur-sm border border-[#13201c]/10 hover:bg-[#faf8f5] hover:scale-105 transition-all"
                aria-label="Close"
                onClick={() => setModalProduct(null)}
              >
                <X size={16} />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Product Image Frame */}
                <div className="relative bg-[#ece5d8] min-h-[300px] md:min-h-[520px]">
                  <img
                    src={modalProduct.image}
                    alt={modalProduct.name}
                    className="h-full w-full object-cover"
                  />
                  {modalProduct.batch && (
                    <div className="absolute top-4 left-4 bg-[#faf8f5]/90 px-3 py-1 text-[8.5px] font-sans tracking-[0.24em] text-[#13201c] uppercase border border-[#13201c]/10">
                      {modalProduct.batch}
                    </div>
                  )}
                </div>

                {/* Editorial Content */}
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="flex items-center justify-between gap-4">
                    <p className="eyebrow text-[#8a7356]">
                      {modalProduct.skinType || modalProduct.category}
                    </p>
                    {modalProduct.weight && (
                      <span className="text-[9.5px] tracking-[0.2em] text-[#9c958a] font-sans uppercase">
                        {modalProduct.weight}
                      </span>
                    )}
                  </div>

                  <h2 id="product-title" className="mt-3 font-serif text-3xl sm:text-4xl font-light text-[#13201c]">
                    {modalProduct.name}
                  </h2>

                  <p className="mt-2 font-serif text-2xl text-[#8a7356]">
                    ${modalProduct.price}
                  </p>

                  <p className="mt-6 text-sm leading-relaxed text-[#6e675e] font-light">
                    {modalProduct.description}
                  </p>

                  {/* Scent Notes Breakdown */}
                  {modalProduct.notes && (
                    <div className="mt-6 border-t border-b border-[#13201c]/10 py-3.5 space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 text-[9px] font-sans tracking-[0.22em] text-[#8a7356] uppercase mb-1">
                        <Sparkles size={11} />
                        <span>Botanical Olfactory Pyramid</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[11px] text-[#2b2824] font-light">
                        <div>
                          <span className="text-[9px] text-[#9c958a] uppercase block">Top</span>
                          {modalProduct.notes.top}
                        </div>
                        <div>
                          <span className="text-[9px] text-[#9c958a] uppercase block">Heart</span>
                          {modalProduct.notes.heart}
                        </div>
                        <div>
                          <span className="text-[9px] text-[#9c958a] uppercase block">Base</span>
                          {modalProduct.notes.base}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Ingredients */}
                  <div className="mt-5">
                    <p className="text-[9px] tracking-[0.22em] text-[#9c958a] uppercase font-sans mb-1">
                      Key Whole Botanicals
                    </p>
                    <p className="text-xs text-[#13201c] font-light">
                      {modalProduct.ingredients.join(" · ")}
                    </p>
                  </div>

                  {/* Quantity & Add Action */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex items-center gap-4 border border-[#13201c]/15 px-4 py-3 bg-[#faf8f5]">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="hover:opacity-60 transition-opacity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="font-sans text-sm font-medium w-4 text-center">{qty}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => setQty((q) => q + 1)}
                        className="hover:opacity-60 transition-opacity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <button
                      className="flex-1 bg-[#13201c] py-3.5 px-6 text-[10px] tracking-[0.26em] text-[#faf8f5] uppercase font-medium shadow-[0_8px_20px_rgba(19,32,28,0.12)] hover:bg-[#0b1512] transition-colors"
                      onClick={() => {
                        addToCart(modalProduct, qty);
                        setModalProduct(null);
                        setQty(1);
                      }}
                    >
                      Reserve For Ritual
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
