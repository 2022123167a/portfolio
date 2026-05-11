import { Award, GraduationCap, Languages } from "lucide-react";

const languages = ["Arabic - Native", "Turkish - Advanced (C1)", "English - Intermediate (B1)"];

function Education() {
  return (
    <section id="education" className="section-container">
      <p className="section-kicker">Education</p>
      <h2 className="section-heading">Education, Certifications & Languages</h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <article className="glass-card hover-lift p-6">
          <GraduationCap className="mb-5 text-blue-300" size={30} />
          <h3 className="text-xl font-bold text-white">Sivas Cumhuriyet University</h3>
          <p className="mt-3 text-slate-300">B.Sc. in Computer Engineering</p>
          <p className="mt-2 text-sm text-slate-400">2022 - 2026</p>
          <p className="mt-4 text-blue-200">Graduating in 2026</p>
        </article>
        <article className="glass-card hover-lift p-6">
          <Award className="mb-5 text-purple-300" size={30} />
          <h3 className="text-xl font-bold text-white">Cisco CCNA / CCNP</h3>
          <p className="mt-3 text-slate-300">Cisco Networking Academy</p>
          <p className="mt-2 text-sm text-slate-400">2021 - 2022</p>
        </article>
        <article className="glass-card hover-lift p-6">
          <Languages className="mb-5 text-blue-300" size={30} />
          <h3 className="text-xl font-bold text-white">Languages</h3>
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
