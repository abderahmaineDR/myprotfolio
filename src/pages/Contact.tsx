import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "C7UNefMImXcsaj89b";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_rkrifto";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_ncmxwf4";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/abderahmaine.dridi.1?locale=fr_FR",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abderahmaine-dridi-614436351/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/abderahmaineDR",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t.contact.missingFields,
        description: t.contact.fillAllFields,
        variant: "destructive",
      });
      return;
    }

    if (!formRef.current) {
      toast({
        title: t.contact.errorTitle,
        description: t.contact.formReferenceMissing,
        variant: "destructive",
      });
      return;
    }

    const honeypotField = formRef.current.elements.namedItem("_gotcha");
    if (honeypotField instanceof HTMLInputElement && honeypotField.value.trim() !== "") {
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );

      console.log("EmailJS Success:", result);

      toast({
        title: t.contact.messageSent,
        description: t.contact.thankYou,
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: unknown) {
      console.error("EmailJS Error:", error);
      const errorMessage =
        typeof error === "object" && error !== null && "message" in error
          ? String((error as { message?: string }).message ?? t.contact.sendFailed)
          : t.contact.sendFailed;

      toast({
        title: t.contact.errorTitle,
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-container pt-32 sm:pt-36">
        <div className="surface-card p-7 sm:p-10">
          <span className="kicker">{t.nav.contact}</span>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">{t.contact.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="section-container pt-6">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="surface-card p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-foreground">{t.contact.contactInfo}</h2>

            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              <a href="mailto:abderahmainedridi@gmail.com" className="flex items-center gap-3 rounded-xl border border-border bg-secondary/70 p-3 hover:text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-card text-foreground">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em]">{t.contact.email}</p>
                  <p className="mt-1 font-medium">abderahmainedridi@gmail.com</p>
                </div>
              </a>

              <a href="tel:+21626480615" className="flex items-center gap-3 rounded-xl border border-border bg-secondary/70 p-3 hover:text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-card text-foreground">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em]">{t.contact.phone}</p>
                  <p className="mt-1 font-medium">+216 26 480 615</p>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-secondary/70 p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-card text-foreground">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em]">{t.contact.location}</p>
                  <p className="mt-1 font-medium">{t.footer.locationText}</p>
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-border pt-5">
              <p className="text-sm font-semibold text-foreground">{t.contact.connectWithMe}</p>
              <div className="mt-3 flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="surface-card p-6 sm:p-7">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" aria-busy={isLoading}>
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  {t.contact.name} <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder={t.contact.nameRequired}
                  autoComplete="name"
                  minLength={2}
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  {t.contact.emailLabel} <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder={t.contact.emailRequired}
                  autoComplete="email"
                  required
                  disabled={isLoading}
                />
                <input type="hidden" name="reply_to" value={formData.email} />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field"
                  placeholder={t.contact.subjectPlaceholder}
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  {t.contact.message} <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="input-field resize-none"
                  placeholder={t.contact.messageRequired}
                  minLength={10}
                  required
                  disabled={isLoading}
                />
              </div>

              <button type="submit" className="btn-primary w-full" disabled={isLoading} aria-live="polite">
                <Send size={16} className="mr-2" />
                {isLoading ? t.contact.sending : t.contact.sendMessage}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
