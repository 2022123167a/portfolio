import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const formspreeEndpoint = "https://formspree.io/f/mwvyaarv";

const contactItems = [
  { icon: Mail, label: "Email", value: "a7med.shif0@gmail.com", href: "mailto:a7med.shif0@gmail.com" },
  { icon: Phone, label: "Phone", value: "+90 552 866 76 11", href: "tel:+905528667611" },
  { icon: MapPin, label: "Location", value: "Based in Sivas, Turkey", href: null },
  { iconText: "in", label: "LinkedIn", value: "linkedin.com/in/ahmedsherifdev", href: "https://linkedin.com/in/ahmedsherifdev" },
  {
    iconText: "GH",
    label: "GitHub",
    value: "github.com/2022123167a",
    href: "https://github.com/2022123167a",
  },
];

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("success");
      event.currentTarget.reset();
    }
  };

  return (
    <section id="contact" className="section-container">
      <p className="section-kicker">Contact</p>
      <h2 className="section-heading">Let&apos;s Build Something</h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {contactItems.map(({ icon: Icon, iconText, label, value, href }) => {
            const content = (
              <div className="glass-card hover-lift flex items-center gap-4 p-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-300/10 text-blue-300">
                  {Icon ? <Icon size={22} /> : <span className="text-sm font-bold">{iconText}</span>}
                </span>
                <span>
                  <span className="block text-sm text-slate-400">{label}</span>
                  <span className="block break-all font-medium text-slate-100">{value}</span>
                </span>
              </div>
            );

            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>

        <form className="glass-card p-6 sm:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-200">Name</span>
              <input
                required
                name="name"
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-200">Email</span>
              <input
                required
                name="email"
                type="email"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300"
                placeholder="your@email.com"
              />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-slate-200">Message</span>
            <textarea
              required
              name="message"
              rows="6"
              className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300"
              placeholder="Tell me about your project or opportunity"
            />
          </label>
          <button
            type="submit"
            className="primary-button mt-6 w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
              Thank you. Your message has been sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 rounded-2xl border border-red-300/20 bg-red-300/10 px-4 py-3 text-sm text-red-100">
              Sorry, the message could not be sent. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
