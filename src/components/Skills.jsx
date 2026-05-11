const skillGroups = [
  { title: "Programming Languages", skills: ["Java", "C#", "JavaScript", "TypeScript", "Python"] },
  { title: "Frontend", skills: ["Angular", "React", "HTML", "CSS", "Tailwind CSS", "Responsive Design"] },
  { title: "Backend", skills: ["Node.js", "REST APIs"] },
  { title: "Database", skills: ["MongoDB", "SQL"] },
  { title: "Tools & Technologies", skills: ["Git", "GitHub", "Flet", "Raspberry Pi", "OpenCV"] },
  {
    title: "Concepts",
    skills: [
      "API Integration",
      "Authentication",
      "Runtime Rendering",
      "UI Rendering",
      "State Management",
      "JSON-based UI Systems",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-container">
      <p className="section-kicker">Skills</p>
      <h2 className="section-heading">Technical Toolkit</h2>
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
