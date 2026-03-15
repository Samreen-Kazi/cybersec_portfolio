import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SecureScan",
    description: "Automated vulnerability scanner for web applications with custom rule engine and reporting dashboard.",
    tags: ["Python", "React", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "CryptoVault",
    description: "End-to-end encrypted file storage with zero-knowledge architecture and browser-based decryption.",
    tags: ["TypeScript", "Node.js", "WebCrypto"],
    github: "#",
    live: "#",
  },
  {
    title: "NetWatch",
    description: "Real-time network traffic monitoring tool with anomaly detection and alerting capabilities.",
    tags: ["Go", "React", "WebSocket"],
    github: "#",
  },
  {
    title: "AuthShield",
    description: "Multi-factor authentication library with support for TOTP, WebAuthn, and SMS verification.",
    tags: ["TypeScript", "Node.js", "Security"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
          <span className="text-primary">#</span> Projects
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="flex gap-2">
                  <a href={p.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  {p.live && (
                    <a href={p.live} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-sm text-xs font-mono bg-secondary text-primary border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
