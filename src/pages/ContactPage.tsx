import { useState, type FormEvent } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#faf8f5] text-[#13201c] pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-14">
        {/* Editorial Heading */}
        <Reveal className="border-b border-[#13201c]/10 pb-10">
          <p className="eyebrow text-[#8a7356]">Atelier Correspondence</p>
          <h1 className="mt-5 display text-4xl sm:text-5xl md:text-7xl font-light leading-[0.96] max-w-3xl">
            A quiet note,
            <br />
            <em className="italic font-light text-[#6e675e]">when you need us.</em>
          </h1>
          <p className="mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-[#6e675e] font-light">
            Our atelier responds personally and without automation. For bespoke batch inquiries, retreat amenities, or skincare consultations, write directly to our Devonshire desk.
          </p>
        </Reveal>

        {/* 2-Column Editorial Grid: Details vs Correspondence Form */}
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left Column: Coordinates */}
          <Reveal className="lg:col-span-5 space-y-10">
            <div>
              <p className="text-[9.5px] font-sans tracking-[0.28em] text-[#8a7356] uppercase mb-2">
                Atelier Principal
              </p>
              <h2 className="font-serif text-3xl font-light text-[#13201c]">Ananth V.</h2>
              <p className="text-xs text-[#6e675e] font-light mt-1">
                Founder & Master Soapmaker
              </p>
            </div>

            <div className="space-y-6 text-sm text-[#2b2824] font-light">
              <div className="flex items-start gap-3.5">
                <Phone size={16} className="text-[#8a7356] mt-1 shrink-0" />
                <div>
                  <p className="text-[9px] font-sans tracking-[0.22em] text-[#9c958a] uppercase">Direct Studio Line</p>
                  <a
                    href="tel:+917708461194"
                    className="font-serif text-xl text-[#13201c] link-underline mt-0.5 inline-block"
                  >
                    +91 77084 61194
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail size={16} className="text-[#8a7356] mt-1 shrink-0" />
                <div>
                  <p className="text-[9px] font-sans tracking-[0.22em] text-[#9c958a] uppercase">Studio Desk</p>
                  <a
                    href="mailto:ananth@thebubblesoap.com"
                    className="font-serif text-xl text-[#13201c] link-underline mt-0.5 inline-block"
                  >
                    atelier@thebubblesoap.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin size={16} className="text-[#8a7356] mt-1 shrink-0" />
                <div>
                  <p className="text-[9px] font-sans tracking-[0.22em] text-[#9c958a] uppercase">Atelier Location</p>
                  <p className="text-sm text-[#13201c] font-light mt-0.5">
                    Coimbatore, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock size={16} className="text-[#8a7356] mt-1 shrink-0" />
                <div>
                  <p className="text-[9px] font-sans tracking-[0.22em] text-[#9c958a] uppercase">Studio Hours</p>
                  <p className="text-sm text-[#13201c] font-light mt-0.5">
                    Monday — Friday, 09:00 to 17:00 GMT
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Inscription / Inquiry Form */}
          <Reveal delay={0.1} className="lg:col-span-7 bg-[#f0eae1] p-8 sm:p-12 border border-[#13201c]/10">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#13201c]">
              Transmit An Inquiry
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#6e675e] font-light">
              Kindly allow forty-eight hours for a handwritten response from our team.
            </p>

            {submitted ? (
              <div className="mt-8 border border-[#13201c]/15 bg-[#faf8f5] p-8 text-center">
                <p className="font-serif text-2xl italic text-[#13201c]">
                  Thank you. Your message has reached our Devonshire desk.
                </p>
                <p className="mt-3 text-xs text-[#6e675e] font-light">
                  Ananth or a studio apprentice will correspond with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-[9px] font-sans tracking-[0.24em] uppercase text-[#6e675e] mb-2"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Lady Clara Ravenswood"
                      className="w-full bg-[#faf8f5] border border-[#13201c]/15 px-4 py-3 text-sm text-[#13201c] outline-none font-light focus:border-[#13201c]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="client-email"
                      className="block text-[9px] font-sans tracking-[0.24em] uppercase text-[#6e675e] mb-2"
                    >
                      Electronic Mail
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      placeholder="e.g. clara@ravenswood.com"
                      className="w-full bg-[#faf8f5] border border-[#13201c]/15 px-4 py-3 text-sm text-[#13201c] outline-none font-light focus:border-[#13201c]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="client-inquiry-type"
                    className="block text-[9px] font-sans tracking-[0.24em] uppercase text-[#6e675e] mb-2"
                  >
                    Inquiry Nature
                  </label>
                  <select
                    id="client-inquiry-type"
                    className="w-full bg-[#faf8f5] border border-[#13201c]/15 px-4 py-3 text-sm text-[#13201c] outline-none font-light focus:border-[#13201c]"
                  >
                    <option>Bespoke Formulation or Batch Order</option>
                    <option>Private Residence or Retreat Amenities</option>
                    <option>Retail Stockist Inquiry</option>
                    <option>Skin Sensitivity Consultation</option>
                    <option>General Studio Inquiries</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="client-message"
                    className="block text-[9px] font-sans tracking-[0.24em] uppercase text-[#6e675e] mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="client-message"
                    rows={4}
                    required
                    placeholder="Share your thoughts, skin questions, or custom requests…"
                    className="w-full bg-[#faf8f5] border border-[#13201c]/15 px-4 py-3 text-sm text-[#13201c] outline-none font-light focus:border-[#13201c] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#13201c] px-8 py-4 text-[10.5px] tracking-[0.26em] text-[#faf8f5] uppercase font-medium shadow-[0_8px_20px_rgba(19,32,28,0.12)] hover:bg-[#0b1512] transition-colors"
                >
                  <span>Transmit Inquiry</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
