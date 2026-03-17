import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const experience = [
  {
    job: "Cybersecurity Analyst Intern",
    company: "Dez Labs",
    year: "2026 – Present",
    description: "Worked on making the company PDPA compliant. Conducted cybersecurity awareness training for the employees of the company.",
  },
  {
    job: "CPS Admin Staff",
    company: "Chicago Public Schools",
    year: "2025 – Present",
    description: "Proctor CPS exams and monitor students to ensure academic integrity, accurate records, and smooth test operations. Handle check-ins and administrative tasks with precision, demonstrating strong leadership and attention to detail.",
  },
  {
    job: "Cybersecurity & Technolgy Intern",
    company: "ProspHER",
    year: "Oct 2025 – Feb 2026",
    description: "Conducted an internal cybersecurity audit of ProspHER’s website and digital platforms to evaluate data protection and access controls in alignment with GDPR guidelines.",
    },
    {
    job: "Cybersecurity & GRC Intern",
    company: "RWA Inc",
    year: "Oct 2025 – Feb 2026",
    description: "Developed and implemented cybersecurity and compliance policies such as Access Control, Acceptable Use, and Data Classification aligned with GDPR and MiCA, enhancing blockchain data protection and compliance readiness. ",
    },
      {
    job: "Campus Ambassdor",
    company: "MyCaptain",
    year: "Jan 2022 – May 2023",
    description: "Worked as the campus ambassdor for Mycaptain. Interacted daily with more than 50+ students, guiding them in course selection and other campus facilities",
    },
      {
    job: "Web Development Intern",
    company: "Vidyalankar Institute of Technoogy",
    year: "Jun 2021 – Sep 2021",
    description: "Engineered a scalable Alumni Management System using PHP, MySQL, JavaScript, HTML/CSS, enhancing database performance by 30% and increasing alumni user engagement by 40% through intuitive UI design.",
    },
    {
    job: "Web Development Intern",
    company: "Sunarj Technologies",
    year: "May 2019 – Aug 2019",
    description: "Developed and integrated interactive UI components using HTML, CSS, and JavaScript, boosting user engagement by 40% across multiple client websites with 10,000+ monthly users.",
    },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
          <span className="text-primary">#</span> Experience
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8" />

        <div className="space-y-6">
          {experience.map((e) => (
            <div key={e.job} className="flex gap-4 p-5 rounded-lg border border-border bg-card">
              <div className="p-2 rounded-md bg-secondary border border-border h-fit">
                <BriefcaseBusiness className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{e.job}</h3>
                <p className="font-mono text-sm text-primary">{e.company}</p>
                <p className="text-xs text-muted-foreground mt-1">{e.year}</p>
                <p className="text-sm text-muted-foreground mt-2">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;