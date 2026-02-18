"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <SectionWrapper>
      <section
        id="testimonials"
        className="scroll-mt-32 mt-32 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          {t("testimonials.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Testimonial 1 */}
          <motion.div
            className="bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-yellow-400 text-2xl mb-2">★★★★★</p>
            <p className="text-zinc-300 italic">
              {t("testimonials.t1.text")}
            </p>
            <p className="mt-4 text-yellow-400 font-semibold">
              {t("testimonials.t1.author")}
            </p>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            className="bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-yellow-400 text-2xl mb-2">★★★★★</p>
            <p className="text-zinc-300 italic">
              {t("testimonials.t2.text")}
            </p>
            <p className="mt-4 text-yellow-400 font-semibold">
              {t("testimonials.t2.author")}
            </p>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            className="bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-yellow-400 text-2xl mb-2">★★★★★</p>
            <p className="text-zinc-300 italic">
              {t("testimonials.t3.text")}
            </p>
            <p className="mt-4 text-yellow-400 font-semibold">
              {t("testimonials.t3.author")}
            </p>
          </motion.div>

        </div>
      </section>
    </SectionWrapper>
  );
}
