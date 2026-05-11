import { Download, Mail, MoveRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import profileImage from "../assets/profile.jpg";

const githubUrl = "https://github.com/2022123167a";
const linkedinUrl = "https://linkedin.com/in/ahmedsherifdev";
const cvUrl = "/Ahmed_Sherif_CV.pdf"; // Replace public/Ahmed_Sherif_CV.pdf with your final CV file.

function Hero() {
  const { t } = useTranslation();
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="home" className="relative min-h-screen pt-28">
      <div className="section-container grid min-h-[calc(100vh-7rem)] items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <p className="section-kicker">{t("hero.location")}</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            {t("hero.greeting")}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-blue-300 sm:text-3xl">
            {t("hero.title")}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {t("hero.intro")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="primary-button">
              {t("hero.viewProjects")} <MoveRight size={18} />
            </a>
            <a href="#contact" className="secondary-button">
              {t("hero.contactMe")} <Mail size={18} />
            </a>
            <a href={cvUrl} download className="secondary-button">
              {t("hero.downloadCv")} <Download size={18} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={t("hero.linkedin")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-200 transition hover:-translate-y-1 hover:border-blue-300/50 hover:text-blue-300"
            >
              <span className="text-sm font-bold">in</span>
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={t("hero.github")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-200 transition hover:-translate-y-1 hover:border-purple-300/50 hover:text-purple-300"
            >
              <span className="text-sm font-bold">GH</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-float sm:max-w-md">
          <div className="absolute inset-5 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-blue-950/30">
            {imageFailed ? (
              <div className="flex aspect-[4/5] w-full items-center justify-center rounded-[1.45rem] bg-gradient-to-br from-blue-500/30 via-slate-900 to-purple-500/30">
                <span className="text-6xl font-black text-white">AS</span>
              </div>
            ) : (
              <img
                src={profileImage}
                alt="Ahmed Sherif"
                className="aspect-[4/5] w-full rounded-[1.45rem] object-cover"
                onError={() => setImageFailed(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
