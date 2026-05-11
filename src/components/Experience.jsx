import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();
  const experiences = t("experience.items", { returnObjects: true });

  return (
    <section id="experience" className="section-container">
      <p className="section-kicker">{t("experience.kicker")}</p>
      <h2 className="section-heading">{t("experience.heading")}</h2>
      <div className="mt-10 space-y-5">
        {experiences.map((experience) => (
          <article key={experience.title} className="glass-card hover-lift p-6 sm:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                <p className="mt-1 text-blue-300">{experience.company}</p>
              </div>
              <span className="w-fit rounded-full border border-purple-300/20 bg-purple-300/10 px-4 py-1.5 text-sm font-medium text-purple-100">
                {experience.date}
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-slate-300">
              {experience.bullets.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
