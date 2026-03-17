import { motion } from "framer-motion";
import { User, MapPin, Mail } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
          <span className="text-primary">#</span> About Me
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8" />

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a developer and cybersecurity enthusiast with a passion for creating
              robust, secure web applications. My journey spans full-stack development,
              penetration testing, and security research.
            </p>
            <p>
              I love working at the intersection of development and security — building
              things and then trying to break them. This dual perspective helps me write
              more resilient code and identify risks early.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <User className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-foreground">Name</span>
              </div>
              <p className="text-muted-foreground text-sm">Samreen Kazi</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-foreground">Email</span>
              </div>
              <p className="text-muted-foreground text-sm">samreenkazi17@gmail.com</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
