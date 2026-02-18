"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/app/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <SectionWrapper>
      <section
        id="about"
        className="scroll-mt-32 mt-32 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          {t("about.title")}
        </h2>

        <div className="flex flex-col items-center gap-6">
          {/* Foto animada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/teacher_jose.jpg"
              alt={t("about.imageAlt")}
              width={220}
              height={220}
              className="w-70 h-70 rounded-xl object-cover border-4 border-yellow-500 shadow-xl"
            />
          </motion.div>

          {/* Párrafo 1 */}
          <motion.p
            className="text-lg text-zinc-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {t("about.paragraph1")}
          </motion.p>

          {/* Párrafo 2 */}
          <motion.p
            className="text-lg text-zinc-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("about.paragraph2")}
          </motion.p>
        </div>
      </section>
    </SectionWrapper>
  );
}
