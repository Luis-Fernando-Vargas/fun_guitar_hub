"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <SectionWrapper>
      <section className="w-full max-w-6xl mx-auto mt-28 flex flex-col-reverse md:flex-row items-center justify-between gap-16 px-6">

        {/* Left side */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
            {t("hero.title")}
          </h1>

          <p className="text-lg sm:text-xl max-w-md text-zinc-200 leading-relaxed mx-auto md:mx-0">
            {t("hero.subtitle")}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3.5 px-10 rounded-full text-lg transition shadow-lg shadow-yellow-500/20"
            >
              {t("hero.button1")}
            </a>

            <a
              href="#videos"
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3.5 px-10 rounded-full text-lg border border-zinc-700 transition"
            >
              {t("hero.button2")}
            </a>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/playing_guitar.jpg"
            alt={t("hero.imageAlt")}
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl border-4 border-yellow-500 object-cover"
          />
        </motion.div>

      </section>
    </SectionWrapper>
  );
}
