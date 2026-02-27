import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "REST vs GraphQL — When to Use What",
    excerpt:
      "A practical breakdown of REST and GraphQL from someone who's shipped both in production. Trade-offs, patterns, and when each truly shines.",
    date: "Jan 2025",
    readTime: "8 min",
    tags: ["Backend", "API Design"],
  },
  {
    title: "How I Built a Scalable Chat Architecture",
    excerpt:
      "Deep-dive into WebSocket orchestration, message persistence, and horizontal scaling strategies behind a real-time chat & video platform.",
    date: "Dec 2024",
    readTime: "12 min",
    tags: ["System Design", "WebSockets"],
  },
  {
    title: "Deployment Challenges in Production",
    excerpt:
      "Lessons learned from zero-downtime deployments, Docker networking pitfalls, and CI/CD pipeline failures that taught me more than any tutorial.",
    date: "Nov 2024",
    readTime: "10 min",
    tags: ["DevOps", "Docker"],
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Blog
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Thoughts & Technical Writing
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            I write about architecture decisions, production war stories, and
            engineering trade-offs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card rounded-xl p-6 flex flex-col justify-between hover:shadow-elevated transition-shadow group cursor-pointer"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <ArrowRight
                  size={16}
                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
