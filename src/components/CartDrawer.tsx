import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Sparkles, X } from "lucide-react";
import { useStore } from "../store";

export function CartDrawer() {
  const { cartOpen, setCartOpen, cart, removeFromCart, setQuantity, cartTotal } =
    useStore();

  const threshold = 60;
  const progress = Math.min(100, Math.round((cartTotal / threshold) * 100));
  const diff = threshold - cartTotal;

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.button
            aria-label="Close cart drawer"
            className="fixed inset-0 z-[70] bg-[#13201c]/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
          />
          <motion.aside
            role="dialog"
            aria-modal
            aria-label="Atelier ritual cart"
            className="fixed right-0 top-0 z-[71] flex h-full w-full max-w-md flex-col bg-[#faf8f5] shadow-[-20px_0_60px_rgba(19,32,28,0.15)] border-l border-[#13201c]/10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#13201c]/10 px-8 py-6">
              <div>
                <p className="eyebrow text-[#8a7356]">Your Selections</p>
                <h2 className="font-serif text-3xl font-light text-[#13201c]">Atelier Bag</h2>
              </div>
              <button
                aria-label="Close cart"
                onClick={() => setCartOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#13201c]/12 text-[#13201c] hover:bg-[#13201c] hover:text-[#faf8f5] transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {/* Free Shipping / Gift Packaging Tier */}
            <div className="bg-[#ece5d8]/60 px-8 py-3.5 border-b border-[#13201c]/8 text-xs">
              <div className="flex items-center justify-between text-[9.5px] tracking-wider uppercase font-sans text-[#13201c]">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={11} className="text-[#8a7356]" />
                  <span>
                    {diff > 0
                      ? `Add $${diff} for Complimentary Linen Pouch`
                      : "Complimentary Linen Pouch Unlocked"}
                  </span>
                </span>
                <span className="text-[#8a7356] font-medium">{progress}%</span>
              </div>
              <div className="mt-2 h-1 w-full bg-[#13201c]/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#13201c] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              {cart.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="font-serif text-2xl italic text-[#9c958a] font-light">
                    The bag is empty —
                    <br />
                    an unhurried, quiet state.
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-6 text-[10px] tracking-[0.24em] uppercase text-[#13201c] link-underline"
                  >
                    Explore The Dispensary
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-[#13201c]/8">
                  {cart.map((item) => (
                    <li key={item.product.id} className="py-5 flex gap-4 items-start">
                      <div className="relative h-24 w-20 shrink-0 bg-[#ece5d8] border border-[#13201c]/8 overflow-hidden">
                        <img
                          src={item.product.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <p className="font-serif text-lg font-light text-[#13201c] leading-snug">
                            {item.product.name}
                          </p>
                          <span className="font-serif text-base text-[#8a7356] ml-2">
                            ${item.product.price * item.quantity}
                          </span>
                        </div>

                        <p className="text-[9px] tracking-wider text-[#9c958a] uppercase mt-0.5">
                          {item.product.weight || "140g Bar"}
                        </p>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-3 border border-[#13201c]/15 px-2 py-1 bg-[#faf8f5]">
                            <button
                              aria-label="Decrease quantity"
                              onClick={() =>
                                setQuantity(item.product.id, item.quantity - 1)
                              }
                              className="text-[#13201c] hover:opacity-60"
                            >
                              <Minus size={11} />
                            </button>
                            <span className="w-4 text-center text-xs font-sans font-medium">
                              {item.quantity}
                            </span>
                            <button
                              aria-label="Increase quantity"
                              onClick={() =>
                                setQuantity(item.product.id, item.quantity + 1)
                              }
                              className="text-[#13201c] hover:opacity-60"
                            >
                              <Plus size={11} />
                            </button>
                          </div>

                          <button
                            className="text-[9px] tracking-[0.2em] uppercase text-[#9c958a] hover:text-[#13201c] transition-colors"
                            onClick={() => removeFromCart(item.product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Summary & Checkout */}
            <div className="border-t border-[#13201c]/10 bg-[#faf8f5] px-8 py-6">
              <div className="flex justify-between text-xs tracking-wider uppercase font-sans text-[#6e675e]">
                <span>Ritual Subtotal</span>
                <span className="font-serif text-xl text-[#13201c] normal-case">
                  ${cartTotal}
                </span>
              </div>
              <p className="mt-1 text-[10px] text-[#9c958a] font-light">
                Carbon-neutral delivery & taxes calculated at checkout
              </p>

              <button
                disabled={cart.length === 0}
                className="mt-5 w-full bg-[#13201c] py-4 text-[10.5px] tracking-[0.26em] text-[#faf8f5] uppercase font-medium shadow-[0_8px_20px_rgba(19,32,28,0.15)] hover:bg-[#0b1512] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Proceed To Studio Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
