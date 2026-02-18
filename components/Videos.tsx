"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Videos() {
  return (
    <SectionWrapper>
      <section
        id="videos"
        className="scroll-mt-32 mt-32 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Videos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

          {/* Video 1 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-zinc-700">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1a4VfsFvDp0"
                title="Warm-up Session"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-yellow-400">
              Warm-up Session
            </h3>
            <p className="text-zinc-300 mt-2 max-w-md">
              A warm-up session demonstrating major scales and clean technique.
            </p>
          </motion.div>

          {/* Video 2 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-zinc-700">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/vHTEwG6t4YY"
                title="Nonsuch – Suzuki Book 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-yellow-400">
              Nonsuch – Suzuki Book 3
            </h3>
            <p className="text-zinc-300 mt-2 max-w-md">
              Performance of “Nonsuch,” a Renaissance piece included in Suzuki Guitar Book 3.
            </p>
          </motion.div>

          {/* Video 3 */}
          <motion.div
            className="flex flex-col items-center sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-zinc-700">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/vL-sWFOxHTw"
                title="Magdalena Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-yellow-400">
              Magdalena – Guitar Performance
            </h3>
            <p className="text-zinc-300 mt-2 max-w-md">
              A beautiful interpretation of “Magdalena” showcasing expressive guitar technique.
            </p>
          </motion.div>

        </div>
      </section>
    </SectionWrapper>
  );
}
