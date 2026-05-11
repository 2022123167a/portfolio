import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "education", href: "#education" },
  { key: "contact", href: "#contact" },
];

const languages = [
  { code: "en", labelKey: "language.en" },
  { code: "ar", labelKey: "language.ar" },
  { code: "tr", labelKey: "language.tr" },
];

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("portfolioLanguage", language);
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-slate-950/85 shadow-lg shadow-slate-950/30 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="text-lg font-bold text-white">
          Ahmed <span className="text-blue-300">Sherif</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-blue-300"
            >
              {t(`nav.links.${link.key}`)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                i18n.language === language.code
                  ? "border-blue-300 bg-blue-300/15 text-blue-100"
                  : "border-white/10 bg-white/[0.06] text-slate-300 hover:border-blue-300/40"
              }`}
              aria-label={`${t("language.label")}: ${t(language.labelKey)}`}
              onClick={() => changeLanguage(language.code)}
            >
              {t(language.labelKey)}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white lg:hidden"
          aria-label={t("nav.toggle")}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 pb-5 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06] hover:text-blue-300"
                onClick={() => setIsOpen(false)}
              >
                {t(`nav.links.${link.key}`)}
              </a>
            ))}
            <div className="mt-3 flex gap-2 px-4">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                    i18n.language === language.code
                      ? "border-blue-300 bg-blue-300/15 text-blue-100"
                      : "border-white/10 bg-white/[0.06] text-slate-300"
                  }`}
                  onClick={() => changeLanguage(language.code)}
                >
                  {t(language.labelKey)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
