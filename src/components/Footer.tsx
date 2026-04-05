import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="section-container pt-6 sm:pt-8 lg:pt-10">
      <div className="surface-card overflow-hidden p-6 sm:p-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="kicker mb-3">Portfolio</p>
            <h3 className="text-2xl font-bold text-foreground">{t.home.name}</h3>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">{t.footer.webDeveloper}</p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:abderahmainedridi@gmail.com"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground">
                <Mail size={16} />
              </span>
              abderahmainedridi@gmail.com
            </a>

            <a
              href="tel:+21626480615"
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground">
                <Phone size={16} />
              </span>
              +216 26 480 615
            </a>
          </div>

          <a
            href="https://maps.google.com/?q=36.857510,10.188406"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground">
              <MapPin size={16} />
            </span>
            <span>{t.footer.locationText}</span>
          </a>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
