import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Praduman delivered a production-ready SaaS dashboard ahead of schedule. His architecture decisions saved us weeks of refactoring down the road.",
    name: "Arjun Mehta",
    role: "CTO, FinEdge Solutions",
  },
  {
    quote:
      "Working with Praduman felt like having a senior engineer on the team. Clean code, clear communication, and zero hand-holding required.",
    name: "Sarah Chen",
    role: "Founder, NovaBuild",
  },
  {
    quote:
      "He rebuilt our legacy API layer with a scalable Node.js architecture. Performance improved 3× and our deployment pipeline finally works.",
    name: "Rahul Kapoor",
    role: "Product Lead, CloudSync",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-card/50" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            What People Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card rounded-xl p-6 flex flex-col justify-between hover:shadow-elevated transition-shadow"
            >
              <div>
                <Quote size={24} className="text-primary/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-display font-semibold text-foreground text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
