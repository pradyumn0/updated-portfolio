import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  description: string[];
  tech: string[];
  category: "fullstack" | "frontend" | "backend";
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "CRMJIO- A Billing Software",
    tagline:
      "Streamlining leads, sales, and client relationships in one powerful platform.",
    description: [
      "Designed modular component library with 30+ reusable components",
      "Implemented lead management system with status tracking and activity logging",
      "Built secure authentication with JWT and role-based access control (Owner/Team)",
      "Developed APIs with optimized MongoDB queries for high performance",
    ],
    tech: ["React", "Next.js", "JavaScript", "TypeScript", "MongoDB", "VPS"],
    category: "fullstack",
    // githubUrl: "#",
    liveUrl: "https://crmjio.com/",
  },
  {
    title: "Dr. iPhone Repair – Smart Device Repair & Resale Platform",
    tagline:
      "Seamless mobile repair booking and device resale management system.",
    description: [
      "Designed an intuitive user interface for booking mobile repair services",
      "Implemented dynamic pricing logic based on device model and repair type.",
      "Developed admin dashboard to manage repair orders, pricing, and inventory",
      "Optimized backend APIs and database structure for fast order processing and scalability.",
    ],
    tech: ["React", "Next.js", "JavaScript", "TypeScript", "MongoDB", "AWS"],
    category: "fullstack",
    githubUrl: "#",
    liveUrl: "https://driphonerepair.com/",
  },
  {
    title: "Amazon Clone",
    tagline:
      "E-commerce frontend with product listing, cart, and checkout flow",
    description: [
      "Implemented product listing with dynamic filtering and pagination",
      "Built shopping cart with add/remove functionality and real-time price updates",
      "Designed responsive UI with Tailwind CSS for seamless experience across devices",
    ],
    tech: ["HTML", "CSS", "VanillaJS"],
    category: "frontend",
    githubUrl: "https://github.com/pradyumn0/Amazon-JsClone",
    liveUrl: "https://pradyumnamazon.netlify.app",
  },
  {
    title: "Food Order Backend",
    tagline:
      "Robust backend architecture powering seamless food ordering and delivery operations.",
    description: [
      "Structured optimized MongoDB schemas with indexing for fast query performance.",
      "Built cart and order management system with real-time status updates (Placed, Preparing, Out for Delivery, Delivered).",
      "Designed and developed RESTful APIs for user authentication, restaurant listings, menu management, and order processing.",
    ],
    tech: ["Node.js", "TypeScript", "MongoDB", "Express"],
    category: "backend",
    githubUrl: "https://github.com/pradyumn0/food_Order_Backend",
  },
];

const filters = ["All", "Full Stack", "Frontend", "Backend"] as const;
const filterMap: Record<string, string | undefined> = {
  All: undefined,
  "Full Stack": "fullstack",
  Frontend: "frontend",
  Backend: "backend",
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<string>("All");

  const filtered = projects.filter((p) => {
    const cat = filterMap[active];
    return !cat || p.category === cat;
  });

  return (
    <section id="projects" className="section-padding bg-card/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Projects
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Featured Work
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === f
                  ? "gradient-bg text-primary-foreground shadow-blue"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {project.tagline}
                  </p>
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      target="_blank"
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      target="_blank"
                      href={project.liveUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {project.description.map((d, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <ArrowRight
                      size={14}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/5 text-primary border border-primary/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
