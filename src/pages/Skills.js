import "../styles/styles.css";
import "../styles/Skills.css";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";

const skillGroups = [
  {
    icon: "bi-code-slash",
    title: "Languages",
    items: ["Python", "C++", "JavaScript", "TypeScript", "Go", "SQL", "HTML/CSS"],
  },
  {
    icon: "bi-hdd-network",
    title: "Networking",
    badge: "CCNA in progress",
    items: [
      "TCP/IP",
      "Subnetting",
      "VLANs",
      "Routing & Switching",
      "OSPF",
      "DHCP / DNS",
      "Packet Tracer",
    ],
  },
  {
    icon: "bi-cloud-check",
    title: "Cloud & Infrastructure",
    items: [
      "GCP Compute Engine",
      "Firebase",
      "Linux",
      "Nginx",
      "Gunicorn",
      "SSL / DNS",
    ],
  },
  {
    icon: "bi-database",
    title: "Data & APIs",
    items: [
      "REST APIs",
      "Django REST Framework",
      "ETL Pipelines",
      "MySQL",
      "MSSQL",
      "MongoDB",
      "Firestore",
    ],
  },
  {
    icon: "bi-window-stack",
    title: "Frontend & UI",
    items: ["React", "Radix UI", "Bootstrap", "Vite", "Responsive Design"],
  },
  {
    icon: "bi-tools",
    title: "DevOps & Tools",
    items: [
      "Git / GitHub",
      "CI/CD Pipelines",
      "Postman",
      "Agile",
      "Automated Scripting",
    ],
  },
];

export default function Skills() {
  return (
    <section id="Skills" className="skills-section">
      <span className="section-eyebrow">Toolbox</span>
      <h1 className="section-heading">Skills</h1>
      <p className="section-sub">
        The languages, platforms, and protocols I work with &mdash; from
        application code down to the network layer.
      </p>
      <div className="skills-grid">
        {skillGroups.map((group, idx) => (
          <motion.div
            className={`skill-group ${group.badge ? "skill-group-featured" : ""}`}
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: idx * 0.08 },
            }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="skill-group-head">
              <span className="skill-group-icon">
                <i className={`bi ${group.icon}`} />
              </span>
              <h3 className="skill-group-title">{group.title}</h3>
              {group.badge && (
                <span className="skill-group-badge">{group.badge}</span>
              )}
            </div>
            <div className="skill-pills">
              {group.items.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
