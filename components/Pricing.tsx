"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <SectionWrapper>
      <section
        id="pricing"
        className="scroll-mt-32 mt-32 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          {t("pricing.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Plan 1 */}
          <motion.div
            className="bg-zinc-800 p-8 rounded-xl shadow-lg border border-zinc-700 hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.07 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              {t("pricing.plan1.title")}
            </h3>

            <p className="text-4xl font-bold text-white mb-4">
              {t("pricing.plan1.price")}
            </p>

            <p className="text-zinc-300 mb-6">
              {t("pricing.plan1.text")}
            </p>

            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition"
            >
              {t("pricing.bookNow")}
            </a>
          </motion.div>

          {/* Plan 2 */}
          <motion.div
            className="bg-zinc-800 p-8 rounded-xl shadow-lg border border-yellow-500 hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.07 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              {t("pricing.plan2.title")}
            </h3>

            <p className="text-4xl font-bold text-white mb-4">
              {t("pricing.plan2.price")}
            </p>

            <p className="text-zinc-300 mb-6">
              {t("pricing.plan2.text")}
            </p>

            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition"
            >
              {t("pricing.bookNow")}
            </a>
          </motion.div>

          {/* Plan 3 */}
          <motion.div
            className="bg-zinc-800 p-8 rounded-xl shadow-lg border border-zinc-700 hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.07 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              {t("pricing.plan3.title")}
            </h3>

            <p className="text-4xl font-bold text-white mb-4">
              {t("pricing.plan3.price")}
            </p>

            <p className="text-zinc-300 mb-6">
              {t("pricing.plan3.text")}
            </p>

            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition"
            >
              {t("pricing.bookNow")}
            </a>
          </motion.div>

        </div>
      </section>
    </SectionWrapper>
  );
}
