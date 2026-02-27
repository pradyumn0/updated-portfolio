import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Skill = { name: string; level: "expert" | "proficient" };

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Redux / RTK Query", level: "proficient" },
      { name: "TanStack Query", level: "proficient" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Express", level: "expert" },
      { name: "MongoDB", level: "expert" },
      { name: "REST APIs", level: "expert" },
      { name: "PostgreSQL", level: "proficient" },
      { name: "GraphQL", level: "proficient" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "AWS", level: "proficient" },
      { name: "CI/CD", level: "proficient" },
      { name: "GitHub Actions", level: "proficient" },
      { name: "Git", level: "expert" },
      { name: "Linux", level: "expert" },
    ],
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Tech Stack
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Tools & Technologies
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            A curated set of technologies I use to build production-grade
            applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + ci * 0.15 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      skill.level === "expert"
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-muted text-muted-foreground border border-border"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary" /> Expert
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />{" "}
                  Proficient
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
