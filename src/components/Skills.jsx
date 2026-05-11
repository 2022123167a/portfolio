import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  const skillGroups = t("skills.groups", { returnObjects: true });

  return (
    <section id="skills" className="section-container">
      <p className="section-kicker">{t("skills.kicker")}</p>
      <h2 className="section-heading">{t("skills.heading")}</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="glass-card hover-lift p-6">
            <h3 className="text-lg font-bold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-blue-300/15 bg-blue-300/10 px-3 py-1.5 text-sm text-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
