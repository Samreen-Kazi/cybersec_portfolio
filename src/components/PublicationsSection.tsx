import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Detecting XSS Vulnerabilities Using Machine Learning",
    venue: "IEEE Security & Privacy, 2023",
    link: "#",
  },
  {
    title: "A Survey of Zero-Trust Architecture in Modern Web Apps",
    venue: "ACM Computing Surveys, 2022",
    link: "#",
  },
  {
    title: "Automated Threat Modeling for Microservices",
    venue: "USENIX Security Symposium, 2022",
    link: "#",
  },
];

const PublicationsSection = () => (
  <section id="publications" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
          <span className="text-primary">#</span> Publications
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8" />

        <div className="space-y-4">
          {publications.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary transition-colors group"
            >
              <FileText className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div className="flex-1">
                <h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{p.venue}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PublicationsSection;
