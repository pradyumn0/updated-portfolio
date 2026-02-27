import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Layers, Code, BarChart3, Bug, Rocket } from "lucide-react";

const services = [
  { icon: Globe, title: "Full Website Development", desc: "End-to-end responsive web applications built for scale." },
  { icon: Layers, title: "SaaS Application Development", desc: "Multi-tenant SaaS platforms with auth, billing, and dashboards." },
  { icon: Code, title: "API Development", desc: "RESTful & GraphQL APIs with documentation and security best practices." },
  { icon: BarChart3, title: "Admin Dashboards", desc: "Data-rich admin panels with analytics, charts, and role management." },
  { icon: Rocket, title: "Cloud Deployment", desc: "Docker, AWS, CI/CD pipelines for zero-downtime deployments." },
  { icon: Bug, title: "Performance & Refactoring", desc: "Code audits, optimization, and legacy codebase modernization." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            What I Can Help You With
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all group"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Let's build your next product.
          </p>
          <a
            href="#contact"
            className="inline-flex gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-blue"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
