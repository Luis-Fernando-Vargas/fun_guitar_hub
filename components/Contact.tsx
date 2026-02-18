"use client";

import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <SectionWrapper>
      <section
        id="contact"
        className="scroll-mt-32 mt-32 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          {t("contact.title")}
        </h2>

        <p className="text-lg text-zinc-300 mb-8">
          {t("contact.subtitle")}
        </p>

        <div className="flex flex-col items-center gap-4 text-zinc-300">

          {/* Phone */}
          <p className="text-xl">
            📞{" "}
            <a
              href="tel:+14388768650"
              className="font-semibold hover:text-yellow-400 transition"
            >
              +1 438 876 8650
            </a>
          </p>

          {/* Email */}
          <p className="text-xl">
            📧{" "}
            <a
              href="mailto:joseluispereira@hotmail.com"
              className="font-semibold hover:text-yellow-400 transition"
            >
              joseluispereira@hotmail.com
            </a>
          </p>

          {/* WhatsApp */}
          <a
            href="https://wa.me/14388768650"
            target="_blank"
            rel="noreferrer"
            className="mt-6 bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-full transition"
          >
            {t("contact.whatsapp")}
          </a>

          {/* Location */}
          <p className="text-lg mt-6 text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {t("contact.location")}
          </p>
        </div>
      </section>
    </SectionWrapper>
  );
}
