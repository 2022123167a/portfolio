import { Code2, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const githubBase = "https://github.com/2022123167a";

const projectLinks = [
  {
    github: `${githubBase}/no-code-platform-runtime`, // Replace with the real repository link.
    live: "https://CHANGE_THIS_TO_LIVE_DEMO_URL.com", // Replace with the real live demo link.
  },
  {
    github: `${githubBase}/chatify`, // Replace with the real repository link.
    live: "https://CHANGE_THIS_TO_LIVE_DEMO_URL.com", // Replace with the real live demo link.
  },
  {
    github: `${githubBase}/raspberry-pi-face-lock`, // Replace with the real repository link.
    live: "https://CHANGE_THIS_TO_LIVE_DEMO_URL.com", // Replace with the real live demo link.
  },
];

function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });

  return (
    <section id="projects" className="section-container">
      <p className="section-kicker">{t("projects.kicker")}</p>
      <h2 className="section-heading">{t("projects.heading")}</h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.name} className="glass-card hover-lift flex flex-col p-6">
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full bg-white/[0.07] px-3 py-1 text-xs text-slate-200">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href={projectLinks[index].github} target="_blank" rel="noreferrer" className="secondary-button">
                <Code2 size={17} /> {t("projects.github")}
              </a>
              <a href={projectLinks[index].live} target="_blank" rel="noreferrer" className="primary-button">
                <ExternalLink size={17} /> {t("projects.liveDemo")}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
