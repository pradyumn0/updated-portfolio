import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:pradumanjadon.dev@gmail.com",
    value: "pradumanjadon.dev@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/praduman-jadon/",
    value: "/in/praduman",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/pradyumn0",
    value: "@pradyumn0",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate()

  function handleSubmit(e){
  e.preventDefault();

  const myForm = e.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams( Array.from(formData.entries()) as [string, string][]).toString()
  })
    .then(() => console.log("Form successfully submitted"))
    .catch(error => alert(error));
};

  return (
    <section id="contact" className="section-padding bg-card/50" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Available for freelance projects and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 flex items-center gap-4 hover:shadow-elevated transition-all group"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <s.icon size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {s.label}
                  </div>
                  <div className="text-sm text-muted-foreground">{s.value}</div>
                </div>
              </a>
            ))}

            <div className="glass-card rounded-xl p-5 mt-6">
              <p className="text-sm text-muted-foreground italic">
                "I follow clean architecture principles, write modular reusable
                code, and implement CI/CD pipelines for automated deployment."
              </p>
              <p className="text-xs text-primary font-medium mt-2">
                — My Engineering Philosophy
              </p>
            </div>
          </motion.div>

          {/* Quick message form */}
          {/* Quick message form */}
          <form
            name="contact"
            method="POST"
            // action="/thank-you"
            data-netlify="true"
            // data-netlify-honeypot="bot-field"
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   navigate("/thank-you");
            // }}
            onSubmit={(e)=>handleSubmit(e)}
            className="glass-card rounded-2xl p-6 space-y-4"
          >
            {/* Required hidden input */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field */}
            {/* <input type="hidden" name="bot-field" /> */}

            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                required
                placeholder="Tell me about your project..."
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full gradient-bg text-primary-foreground py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-blue"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
