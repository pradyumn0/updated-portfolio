import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-primary/20 bg-primary/5 text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
            >
              Hi, I'm <span className="gradient-text">Praduman Jadon</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
            >
              Backend/Full-Stack Engineer building scalable, production-ready
              web applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10"
            >
              I help startups and businesses turn ideas into high-performance
              digital products with clean architecture and modern cloud
              technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-4"
            >
              <a
                href="#projects"
                className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-blue"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="border border-border bg-card text-foreground px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 hover:border-primary/40 transition-colors"
              >
                <Mail size={18} />
                Hire Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: "1+", label: "Years Exp." },
                { value: "10+", label: "Projects" },
                { value: "5+", label: "Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex relative w-80 h-80 md:w-96 md:h-96 
rounded-full border-2 border-gold/30 overflow-hidden shadow-gold
lg:ml-20 xl:ml-16 animate-float"
          >
            <img
              src={"hero.jpg"}
              alt="Full-stack developer workspace illustration"
              className="w-full h-full max-w-md drop-shadow-2xl object-cover "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
