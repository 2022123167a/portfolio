import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>{t("footer.rights")}</p>
        <p>{t("footer.tagline")}</p>
      </div>
    </footer>
  );
}

export default Footer;
