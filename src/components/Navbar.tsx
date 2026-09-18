import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Search, ShoppingBag, X } from "lucide-react";
import { useStore } from "../store";
import { BrandMark } from "./BrandMark";
import { products } from "../data/content";

const links = [
  { to: "/shop", label: "Shop", num: "01" },
  { to: "/collections", label: "Collections", num: "02" },
  { to: "/story", label: "Our Story", num: "03" },
  { to: "/ingredients", label: "Pantry", num: "04" },
  { to: "/journal", label: "Journal", num: "05" },
];

export function Navbar() {
  const { cartCount, setCartOpen, wishlist, setSearchOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const overHero = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Top Editorial Dispatch Ribbon */}
      <div
        className={`fixed left-0 right-0 top-0 z-50 border-b border-[#13201c]/6 bg-[#faf8f5] px-4 py-1.5 text-center transition-all duration-700 ${
          scrolled || overHero ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        } ${overHero ? "bg-[#13201c]/90 text-[#faf8f5]/80 border-[#faf8f5]/10" : "text-[#6e675e]"}`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 text-[9px] tracking-[0.28em] uppercase">
          <span className="hidden sm:inline">Coimbatore Atelier · Est. 2021</span>
          <span className="mx-auto sm:mx-0">
            Complimentary studio linen pouch on orders over $60 · Spring Batch No. 042 Ready
          </span>
          <span className="hidden md:inline">Worldwide Shipping</span>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-40 transition-[padding,top] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "top-3 px-3 md:px-8" : overHero ? "top-0 px-0" : "top-7 px-0"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "h-[64px] rounded-full border border-[#13201c]/10 bg-[#faf8f5]/85 shadow-[0_12px_36px_rgba(19,32,28,0.06)] backdrop-blur-xl"
              : "h-[88px] bg-transparent"
          }`}
        >
          {/* Brand Logo & Monogram */}
          <Link to="/" aria-label="The Bubble Soap home">
            <BrandMark light={overHero} compact={scrolled} />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `link-underline text-[11px] tracking-[0.24em] uppercase transition-colors duration-500 font-medium ${
                    overHero
                      ? isActive
                        ? "text-[#faf8f5] opacity-100 font-semibold"
                        : "text-[#faf8f5]/75 hover:text-[#faf8f5] opacity-90"
                      : isActive
                      ? "text-[#13201c] opacity-100 font-semibold"
                      : "text-[#2b2824]/75 hover:text-[#13201c] opacity-90"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-1">
            <IconBtn
              label="Search the atelier"
              light={overHero}
              onClick={() => setSearchOpen(true)}
            >
              <Search size={16} strokeWidth={1.4} />
            </IconBtn>

            <Link to="/shop">
              <IconBtn label="Wishlist" light={overHero}>
                <span className="relative">
                  <Heart size={16} strokeWidth={1.4} />
                  {wishlist.length > 0 && (
                    <span
                      className={`absolute -right-2.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-sans font-medium ${
                        overHero ? "bg-[#faf8f5] text-[#13201c]" : "bg-[#13201c] text-[#faf8f5]"
                      }`}
                    >
                      {wishlist.length}
                    </span>
                  )}
                </span>
              </IconBtn>
            </Link>

            <IconBtn
              label={`Atelier Bag, ${cartCount} items`}
              light={overHero}
              onClick={() => setCartOpen(true)}
            >
              <span className="relative">
                <ShoppingBag size={16} strokeWidth={1.4} />
                {cartCount > 0 && (
                  <span
                    className={`absolute -right-2.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-sans font-semibold ${
                      overHero ? "bg-[#faf8f5] text-[#13201c]" : "bg-[#13201c] text-[#faf8f5]"
                    }`}
                  >
                    {cartCount}
                  </span>
                )}
              </span>
            </IconBtn>

            {/* Mobile Hamburger */}
            <button
              className={`ml-2 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden transition-colors ${
                overHero ? "text-[#faf8f5]" : "text-[#13201c]"
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span
                className={`block h-px w-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  overHero ? "bg-[#faf8f5]" : "bg-[#13201c]"
                } ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  overHero ? "bg-[#faf8f5]" : "bg-[#13201c]"
                } ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Bespoke Mobile Navigation Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-[#faf8f5] px-8 pt-32 pb-10 text-[#13201c] lg:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow text-[#8a7356] mb-8">Atelier Directory</p>
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {[...links, { to: "/contact", label: "Contact", num: "06" }].map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-[#13201c]/8 pb-4"
                >
                  <Link
                    to={link.to}
                    className="flex items-baseline justify-between group"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="font-serif text-[38px] sm:text-[46px] italic leading-none font-light transition-transform duration-500 group-hover:translate-x-2">
                      {link.label}
                    </span>
                    <span className="text-[10px] font-sans tracking-[0.28em] text-[#9c958a]">
                      {link.num}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-10 flex flex-col gap-2 text-[10px] tracking-[0.24em] text-[#9c958a] uppercase">
              <p>Coimbatore Studio · Open Mon–Fri</p>
              <p className="text-[#13201c]">Botanical Skincare · Small Batch Cures</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function IconBtn({
  children,
  label,
  onClick,
  light,
}: {
  children: React.ReactNode;
  label: string;
  onClick?: () => void;
  light?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`flex h-10 w-10 items-center justify-center transition-all duration-500 rounded-full hover:bg-black/5 ${
        light ? "text-[#faf8f5] hover:text-[#faf8f5] hover:bg-white/10" : "text-[#13201c]"
      }`}
    >
      {children}
    </button>
  );
}

export function SearchOverlay() {
  const { searchOpen, setSearchOpen, setModalProduct } = useStore();
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, setSearchOpen]);

  if (!searchOpen) return null;

  const results = q.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q.toLowerCase()) ||
          p.short.toLowerCase().includes(q.toLowerCase()) ||
          p.ingredients.some((i) => i.toLowerCase().includes(q.toLowerCase()))
      )
    : [];

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center bg-[#13201c]/50 px-4 pt-24 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-[#faf8f5] p-8 md:p-12 shadow-[0_24px_64px_rgba(19,32,28,0.18)] border border-[#13201c]/10">
        <div className="flex items-center justify-between border-b border-[#13201c]/15 pb-4">
          <p className="eyebrow text-[#8a7356]">Search The Atelier Archives</p>
          <button
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
            className="p-1 text-[#13201c] hover:opacity-60 transition-opacity"
          >
            <X size={20} />
          </button>
        </div>
        <label className="sr-only" htmlFor="search-input">
          Search products
        </label>
        <input
          id="search-input"
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search formulas, botanicals, or notes…"
          className="mt-6 w-full border-b border-[#13201c]/20 bg-transparent py-3 font-serif text-2xl md:text-3xl text-[#13201c] outline-none placeholder:text-[#9c958a]/60 font-light"
        />

        {q.trim() && (
          <div className="mt-8 max-h-[340px] overflow-y-auto pr-2">
            <p className="text-[10px] tracking-[0.24em] text-[#9c958a] uppercase mb-4">
              Found {results.length} archive entries
            </p>
            {results.length > 0 ? (
              <div className="divide-y divide-[#13201c]/8">
                {results.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setModalProduct(p);
                      setSearchOpen(false);
                    }}
                    className="flex w-full items-center justify-between py-3.5 text-left group hover:bg-[#ece5d8]/50 px-2 transition-colors"
                  >
                    <div>
                      <p className="font-serif text-lg text-[#13201c] group-hover:italic transition-all">
                        {p.name}
                      </p>
                      <p className="text-xs text-[#6e675e] mt-0.5">{p.short}</p>
                    </div>
                    <span className="font-serif text-sm text-[#8a7356] shrink-0 ml-4">
                      ${p.price}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="py-6 font-serif italic text-muted text-center">
                No formulas matched your inquiry. Try searching for “oat”, “lavender”, or “face”.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
