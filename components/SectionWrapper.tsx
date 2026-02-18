"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionWrapper({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-15% 0px -15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 20 }
      }
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
