import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Cloud, Shield } from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "System Design",
    description:
      "Architecting scalable solutions with clean separation of concerns and modular patterns.",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Building robust REST & GraphQL APIs with authentication, caching, and optimized queries.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "End-to-end deployment pipelines with VPS, AWS, and automated CI/CD workflows.",
  },
  {
    icon: Shield,
    title: "Code Quality",
    description:
      "Writing testable, maintainable code with clean architecture principles and best practices.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Engineering Mindset, Product Focus
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              With 1+ years of experience shipping production applications, I
              focus on building software that is not just functional — but
              scalable, maintainable, and architecturally sound.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I’ve worked across the stack — building responsive React
              interfaces, developing REST APIs, and managing databases for
              real-world applications. I focus on writing clean, maintainable
              code and continuously improving my understanding of backend
              architecture and cloud deployment.
            </p>

            {/* Timeline */}
            <div className="border-l-2 border-primary/20 pl-6 space-y-6">
              {[
                {
                  year: "2026",
                  title: "Full-Stack Engineer",
                  desc: "Building SaaS products and startup MVPs",
                },
                {
                  year: "2025",
                  title: "Full-Stack Developer",
                  desc: "Delivered scalable web apps for growing businesses",
                },
                {
                  year: "2024",
                  title: "Frontend Developer",
                  desc: "Built performant React applications and component libraries",
                },
              ].map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <span className="text-xs font-semibold text-primary">
                    {item.year}
                  </span>
                  <h4 className="font-display font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — strengths */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-5"
          >
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-xl p-5 flex gap-4 items-start hover:shadow-elevated transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <s.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {s.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
