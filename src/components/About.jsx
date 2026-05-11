import { Cpu, Globe2, Network } from "lucide-react";

const highlights = [
  { icon: Cpu, label: "Full-stack software projects" },
  { icon: Network, label: "CCNA / CCNP networking foundation" },
  { icon: Globe2, label: "Runtime and JSON-based UI systems" },
];

function About() {
  return (
    <section id="about" className="section-container">
      <p className="section-kicker">About</p>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <h2 className="section-heading">A developer who connects frontend, backend, and systems thinking.</h2>
        </div>
        <div className="glass-card p-6 sm:p-8">
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            I am a Computer Engineering graduate with experience in full-stack
            development, frontend systems, backend integration, and runtime
            rendering architectures. I have worked on real-world software
            projects involving Angular, React, Node.js, Flet, REST APIs,
            MongoDB, and JSON-based UI systems. I also have experience in
            networking through Cisco CCNA/CCNP and embedded systems through
            Raspberry Pi and OpenCV.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <Icon className="mb-3 text-blue-300" size={24} />
                <p className="text-sm font-medium leading-6 text-slate-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
