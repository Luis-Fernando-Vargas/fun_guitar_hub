"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      const totalScrollable = docHeight - winHeight;

      if (totalScrollable <= 0) {
        setScroll(0);
        return;
      }

      const progress = (scrollTop / totalScrollable) * 100;
      setScroll(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-yellow-400 z-[9999] transition-all duration-150"
      style={{
        width: `${scroll}%`,
        minWidth: scroll === 0 ? "2px" : undefined, // ← SIEMPRE visible
      }}
    />
  );
}

