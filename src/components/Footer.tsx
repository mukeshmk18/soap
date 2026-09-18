import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, ShieldCheck, Sparkles, Sprout, Wind } from "lucide-react";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer className="bg-[#13201c] text-[#faf8f5] border-t border-[#faf8f5]/10 overflow-hidden">
      {/* Upper Atelier Hallmarks Strip */}
      <div className="border-b border-[#faf8f5]/10 py-10 px-6 sm:px-10 md:px-14">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div className="flex items-center gap-3">
            <Sparkles size={18} className="text-[#b39b7d] shrink-0" />
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#faf8f5]">
                42-Day Pine Cure
              </p>
              <p className="text-[9px] text-[#faf8f5]/55 mt-0.5">Cold saponified in Devon</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Sprout size={18} className="text-[#b39b7d] shrink-0" />
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#faf8f5]">
                100% Biodegradable
              </p>
              <p className="text-[9px] text-[#faf8f5]/55 mt-0.5">Returns safely to soil</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Wind size={18} className="text-[#b39b7d] shrink-0" />
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#faf8f5]">
                Zero Synthetics
              </p>
              <p className="text-[9px] text-[#faf8f5]/55 mt-0.5">No artificial fragrance or SLS</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck size={18} className="text-[#b39b7d] shrink-0" />
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#faf8f5]">
                Leaping Bunny Certified
              </p>
              <p className="text-[9px] text-[#faf8f5]/55 mt-0.5">Ethically made & cruelty-free</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Dispatch */}
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 sm:px-10 md:grid-cols-12 md:px-14 md:py-28">
        <div className="md:col-span-5">
          <BrandMark light />
          <p className="mt-8 max-w-sm font-serif text-2xl sm:text-3xl italic leading-relaxed text-[#faf8f5]/75 font-light">
            Thoughtful botanical skincare, poured with unhurried intention.
          </p>
          <address className="mt-8 not-italic space-y-1 text-sm font-light text-[#faf8f5]/70">
            <p className="text-[9px] tracking-[0.26em] text-[#b39b7d] uppercase font-sans mb-2">
              Studio Coordinates
            </p>
            <p className="font-serif text-xl text-[#faf8f5]">Ananth V · Founder</p>
            <p>Coimbatore</p>
            <a
              href="tel:+917708461194"
              className="mt-2 inline-block text-xs font-sans tracking-wider link-underline text-[#faf8f5]/85"
            >
              +91 77084 61194
            </a>
          </address>
        </div>

        <div className="md:col-span-2">
          <p className="text-[9.5px] tracking-[0.28em] uppercase text-[#b39b7d] font-sans">
            Atelier Directory
          </p>
          <ul className="mt-6 space-y-3 text-sm font-light">
            {[
              ["/shop", "Atelier Shop"],
              ["/collections", "Collections"],
              ["/story", "The Method"],
              ["/ingredients", "Pantry Herbarium"],
              ["/journal", "Studio Gazette"],
              ["/contact", "Inquiries"],
            ].map(([to, label]) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-[#faf8f5]/75 hover:text-[#faf8f5] transition-colors link-underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-[9.5px] tracking-[0.28em] uppercase text-[#b39b7d] font-sans">
            Client Protocol
          </p>
          <ul className="mt-6 space-y-3 text-sm font-light text-[#faf8f5]/75">
            {[
              "Carbon-Neutral Shipping",
              "Ritual Guarantee & Returns",
              "Batch Verification",
              "Apothecary FAQ",
              "Privacy Charter",
            ].map((l) => (
              <li key={l}>
                <a
                  href="#protocol"
                  className="hover:text-[#faf8f5] transition-colors link-underline"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[9.5px] tracking-[0.28em] uppercase text-[#b39b7d] font-sans">
            Studio Dispatches
          </p>
          <p className="mt-6 text-xs sm:text-[13px] leading-relaxed text-[#faf8f5]/65 font-light">
            Occasional dispatches regarding seasonal cures, solstices, and botanical essays. Never unsolicited promotions.
          </p>
          <form onSubmit={onSubmit} className="mt-6">
            <label htmlFor="footer-email" className="sr-only">
              Email address for studio dispatches
            </label>
            <div className="flex items-center border-b border-[#faf8f5]/25 pb-1">
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Your email address…"
                className="w-full bg-transparent py-2.5 text-sm text-[#faf8f5] outline-none placeholder:text-[#faf8f5]/35 font-light"
              />
              <button
                type="submit"
                aria-label="Subscribe to studio dispatches"
                className="p-2 text-[#faf8f5]/80 hover:text-[#faf8f5] transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </div>
            {sent && (
              <p className="mt-3 text-[11px] text-[#b39b7d] font-sans tracking-wide">
                You are inscribed on the atelier list.
              </p>
            )}
          </form>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 text-xs text-[#faf8f5]/80 hover:text-[#faf8f5] transition-colors"
            aria-label="Instagram dispatch"
          >
            <Instagram size={15} strokeWidth={1.4} />
            <span className="tracking-[0.16em] uppercase text-[9px] font-sans">
              Follow Our Studio Journal
            </span>
          </a>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="border-t border-[#faf8f5]/10 px-6 py-6 text-[9px] tracking-[0.24em] text-[#faf8f5]/40 uppercase sm:px-10 md:px-14 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} The Bubble Soap · Atelier Botanique Ltd.</span>
        <span>Handcrafted in Devonshire · All Formulations Reserved</span>
      </div>
    </footer>
  );
}
