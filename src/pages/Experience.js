import "../styles/Experience.css";
import { motion } from "motion/react";

const timeline = [
  {
    role: "E-commerce & Automation Assistant",
    company: "Aurora World",
    location: "Pico Rivera, CA",
    period: "Aug 2025 – Present",
    current: true,
    points: [
      "Developed Python automation scripts to parse PDF documents and populate form data, eliminating manual entry errors and improving processing efficiency.",
      "Maintained CMS records and coordinated with internal teams to ensure accurate information and consistent cross-departmental support.",
      "Managed multi-channel platform operations, troubleshooting order and data discrepancies across integrated systems.",
    ],
    tags: ["Python", "PDF Automation", "CMS", "Platform Ops"],
  },
  {
    role: "Software Engineer",
    company: "Furniture of America E-commerce",
    location: "City of Industry, CA",
    period: "Oct 2022 – Apr 2024",
    current: false,
    points: [
      "Provided Level 1 and Level 2 IT support for internal staff, diagnosing and resolving hardware malfunctions, networking issues, software errors, and OS/application configuration problems.",
      "Communicated technical issues and resolutions clearly to non-technical employees, walking users through troubleshooting steps and ensuring minimal workflow disruption.",
      "Provisioned and managed Linux-based server environments on GCP, including network configuration, SSL certificates, DNS setup, and web server optimization.",
      "Developed and maintained automated monitoring and alerting scripts to proactively detect system issues and notify relevant departments in real time.",
      "Built and maintained ETL pipelines and CI/CD processes to ensure reliable, accurate data flow across integrated business systems.",
      "Documented system configurations, troubleshooting procedures, and operational workflows to support team knowledge and consistency.",
    ],
    tags: [
      "IT Support",
      "Linux",
      "GCP",
      "Networking",
      "ETL Pipelines",
      "CI/CD",
      "Documentation",
    ],
  },
  {
    role: "B.S. in Computer Science",
    company: "California State University, Fullerton",
    location: "Fullerton, CA",
    period: "Jan 2022",
    current: false,
    education: true,
    points: [
      "Graduated with a Bachelor of Science in Computer Science, building a strong foundation in software design, algorithms, and full-stack development.",
    ],
    tags: ["Computer Science", "Software Design"],
  },
];

export default function Experience() {
  return (
    <section id="Experience" className="experience-section page-background">
      <span className="section-eyebrow">Career Path</span>
      <h1 className="experience-title">Experience</h1>
      <p className="experience-subtitle">
        A timeline of where I&rsquo;ve built, automated, and shipped.
      </p>

      <div className="timeline">
        {timeline.map((item, idx) => (
          <motion.div
            className={`timeline-item ${item.education ? "is-education" : ""} ${
              item.current ? "is-current" : ""
            }`}
            key={item.role + item.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: idx * 0.1 },
            }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="timeline-marker" aria-hidden="true">
              <span className="timeline-dot" />
            </div>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <h3 className="timeline-role">{item.role}</h3>
                  <p className="timeline-company">
                    {item.company}
                    <span className="timeline-location">
                      {" "}
                      &middot; {item.location}
                    </span>
                  </p>
                </div>
                <span
                  className={`timeline-period ${
                    item.current ? "current" : ""
                  }`}
                >
                  {item.period}
                </span>
              </div>
              <ul className="timeline-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {item.tags && (
                <div className="timeline-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
