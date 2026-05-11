import { Award, GraduationCap, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

function Education() {
  const { t } = useTranslation();
  const languages = t("education.languages", { returnObjects: true });

  return (
    <section id="education" className="section-container">
      <p className="section-kicker">{t("education.kicker")}</p>
      <h2 className="section-heading">{t("education.heading")}</h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <article className="glass-card hover-lift p-6">
          <GraduationCap className="mb-5 text-blue-300" size={30} />
          <h3 className="text-xl font-bold text-white">{t("education.university")}</h3>
          <p className="mt-3 text-slate-300">{t("education.degree")}</p>
          <p className="mt-2 text-sm text-slate-400">{t("education.educationDate")}</p>
          <p className="mt-4 text-blue-200">{t("education.graduating")}</p>
        </article>
        <article className="glass-card hover-lift p-6">
          <Award className="mb-5 text-purple-300" size={30} />
          <h3 className="text-xl font-bold text-white">{t("education.certification")}</h3>
          <p className="mt-3 text-slate-300">{t("education.academy")}</p>
          <p className="mt-2 text-sm text-slate-400">{t("education.certificationDate")}</p>
        </article>
        <article className="glass-card hover-lift p-6">
          <Languages className="mb-5 text-blue-300" size={30} />
          <h3 className="text-xl font-bold text-white">{t("education.languagesTitle")}</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Education;
