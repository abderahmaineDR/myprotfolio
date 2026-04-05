import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.work, path: "/work" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.contact, path: "/contact" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "AR" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLangMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "pt-3" : "pt-4"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="surface-card flex h-16 items-center justify-between px-3 sm:px-4">
          <Link to="/" className="flex items-center gap-2 rounded-full px-2 py-1 text-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-xs font-bold tracking-wider text-primary-foreground">
              AD
            </span>
            <span className="hidden text-sm font-semibold sm:inline">Abderahmaine Dridi</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}

            <div className="relative ml-2" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen((open) => !open)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
                aria-label={t.nav.language}
                aria-haspopup="menu"
                aria-expanded={isLangMenuOpen}
              >
                <Globe size={14} />
                {language.toUpperCase()}
              </button>

              {isLangMenuOpen && (
                <div
                  role="menu"
                  aria-label={t.nav.language}
                  className="surface-card absolute right-0 top-full mt-2 w-24 overflow-hidden p-1"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      role="menuitemradio"
                      aria-checked={language === lang.code}
                      className={`w-full rounded-lg px-3 py-2 text-left text-xs font-semibold transition-colors ${
                        language === lang.code
                          ? "bg-foreground text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full border border-border bg-card p-2 text-muted-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="surface-card mt-2 space-y-2 p-3 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-foreground text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-1">
              <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {t.nav.language}
              </p>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex-1 rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${
                      language === lang.code
                        ? "bg-foreground text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
