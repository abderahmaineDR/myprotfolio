import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <main className="section-container flex min-h-screen items-center justify-center pt-32 sm:pt-36">
        <div className="surface-card w-full max-w-xl p-8 text-center sm:p-10">
          <p className="kicker mx-auto w-fit">404</p>
          <h1 className="mt-5 text-4xl font-bold text-foreground sm:text-5xl">{t.notFound.message}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{t.notFound.title}</p>
          <Link to="/" className="btn-primary mt-7 inline-flex">
            {t.notFound.returnHome}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
