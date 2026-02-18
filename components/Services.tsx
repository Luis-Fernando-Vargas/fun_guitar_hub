"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <SectionWrapper>
      <section
        id="services"
        className="scroll-mt-32 mt-32 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          {t("services.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Card 1 */}
          <motion.div
            className="bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700 hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              {t("services.card1.title")}
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              {t("services.card1.text")}
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700 hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              {t("services.card2.title")}
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              {t("services.card2.text")}
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700 hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              {t("services.card3.title")}
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              {t("services.card3.text")}
            </p>
          </motion.div>

        </div>
      </section>
    </SectionWrapper>
  );
}
