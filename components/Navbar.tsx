"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const { t, lang, setLang } = useLanguage();

  // Cerrar menú si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (open && navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav
      ref={navRef}
      className="
        sticky top-0 z-50 w-full border-b border-white/10
        backdrop-blur-md bg-black/30 transition-all duration-300
        py-4
      "
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <a href="#" className="text-xl font-bold text-yellow-400">
          {t("navbar.logo")}
        </a>

        {/* Menu desktop */}
        <div className="hidden sm:flex items-center gap-6 text-zinc-300">

          <a href="#about" className="hover:text-white transition">{t("navbar.about")}</a>
          <a href="#services" className="hover:text-white transition">{t("navbar.services")}</a>
          <a href="#pricing" className="hover:text-white transition">{t("navbar.pricing")}</a>
          <a href="#testimonials" className="hover:text-white transition">{t("navbar.testimonials")}</a>
          <a href="#videos" className="hover:text-white transition">{t("navbar.videos")}</a>
          <a href="#contact" className="hover:text-white transition">{t("navbar.contact")}</a>

          {/* Language selector desktop */}
          <div className="flex gap-3 ml-4 text-sm font-medium">
            <button
              onClick={() => setLang("en")}
              className={`transition ${lang === "en" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"}`}
            >
              EN
            </button>

            <button
              onClick={() => setLang("fr")}
              className={`transition ${lang === "fr" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"}`}
            >
              FR
            </button>

            <button
              onClick={() => setLang("es")}
              className={`transition ${lang === "es" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"}`}
            >
              ES
            </button>
          </div>
        </div>

        {/* CTA desktop */}
        <a
          href="#contact"
          className="hidden sm:block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full transition"
        >
          {t("navbar.cta")}
        </a>

        {/* Botón hamburguesa */}
        <button
          className="sm:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="sm:hidden bg-black/80 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-lg">

          <a href="#about" onClick={() => setOpen(false)} className="text-zinc-300 hover:text-white">{t("navbar.about")}</a>
          <a href="#services" onClick={() => setOpen(false)} className="text-zinc-300 hover:text-white">{t("navbar.services")}</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="text-zinc-300 hover:text-white">{t("navbar.pricing")}</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="text-zinc-300 hover:text-white">{t("navbar.testimonials")}</a>
          <a href="#videos" onClick={() => setOpen(false)} className="text-zinc-300 hover:text-white">{t("navbar.videos")}</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-zinc-300 hover:text-white">{t("navbar.contact")}</a>

          {/* CTA mobile */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full text-center transition"
          >
            {t("navbar.cta")}
          </a>

          {/* Language selector mobile */}
          <div className="flex justify-center gap-6 mt-4 text-sm font-medium">
            <button
              onClick={() => { setLang("en"); setOpen(false); }}
              className={`transition ${lang === "en" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"}`}
            >
              EN
            </button>

            <button
              onClick={() => { setLang("fr"); setOpen(false); }}
              className={`transition ${lang === "fr" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"}`}
            >
              FR
            </button>

            <button
              onClick={() => { setLang("es"); setOpen(false); }}
              className={`transition ${lang === "es" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"}`}
            >
              ES
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
