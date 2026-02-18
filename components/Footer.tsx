"use client";

import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const { lang, setLang, t } = useLanguage();

  return (
    <SectionWrapper>
      <footer className="mt-32 w-full border-t border-white/20 py-12 text-center mx-auto text-white bg-black/40 backdrop-blur-sm rounded-xl">

        {/* Copyright */}
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Fun Guitar Hub — {t("footer.rights")}
        </p>

        {/* Languages */}
        <p className="mt-2 text-sm opacity-80">
          {t("footer.languages")}
        </p>

        {/* Language selector */}
        <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
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

        {/* Footer links */}
        <div className="mt-6 flex justify-center gap-6 text-sm opacity-80">
          <a href="#about" className="hover:text-yellow-400 transition">{t("footer.about")}</a>
          <a href="#services" className="hover:text-yellow-400 transition">{t("footer.services")}</a>
          <a href="#videos" className="hover:text-yellow-400 transition">{t("footer.videos")}</a>
          <a href="#contact" className="hover:text-yellow-400 transition">{t("footer.contact")}</a>
        </div>

        {/* Social icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61569061783384&rdid=8p8Su8opX6C74IEz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Ac9J2V9Eb%2F#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de Facebook de tu amigo"
            className="inline-flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.09 5.66 21.22 10.44 22v-7.02H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22C18.34 21.22 22 17.09 22 12.07z"/>
            </svg>
            <span className="text-sm">Facebook</span>
          </a>
        </div>

      </footer>
    </SectionWrapper>
  );
}
