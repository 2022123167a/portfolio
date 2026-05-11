import { Cpu, Globe2, Network } from "lucide-react";
import { useTranslation } from "react-i18next";

const highlightIcons = [Cpu, Network, Globe2];

function About() {
  const { t } = useTranslation();
  const highlights = t("about.highlights", { returnObjects: true });

  return (
    <section id="about" className="section-container">
      <p className="section-kicker">{t("about.kicker")}</p>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <h2 className="section-heading">{t("about.heading")}</h2>
        </div>
        <div className="glass-card p-6 sm:p-8">
          <p className="text-base leading-8 text-slate-300 sm:text-lg">{t("about.body")}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((label, index) => {
              const Icon = highlightIcons[index];

              return (
                <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <Icon className="mb-3 text-blue-300" size={24} />
                  <p className="text-sm font-medium leading-6 text-slate-200">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
