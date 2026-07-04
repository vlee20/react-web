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
      "Developed a Python automation script to programmatically populate return data into PDF forms, reducing manual entry errors and improving processing efficiency.",
      "Built a Python PDF parsing script to extract and sort required order line items, streamlining data retrieval and significantly improving workflow accuracy.",
      "Managed multi-channel marketplace operations ensuring order accuracy, platform compliance, and timely shipment processing.",
    ],
    tags: ["Python", "PDF Automation", "Data Parsing", "E-commerce Ops"],
  },
  {
    role: "Software Engineer",
    company: "Furniture of America E-commerce",
    location: "City of Industry, CA",
    period: "Oct 2022 – Apr 2024",
    current: false,
    points: [
      "Architected a scalable RESTful API via Django REST Framework for real-time data synchronization between Warehouse Management Systems, supporting cross-team data integrity for high-volume order processing.",
      "Engineered a cross-departmental duplicate-order prevention and alert system, reducing data integrity failures and protecting downstream WMS workflows.",
      "Developed and maintained ETL pipelines and CI/CD processes to extract, transform, and load large datasets across integrated business applications.",
      "Provisioned and managed production/testing environments on GCP Compute Engine (Linux VMs), including SSL certificate management, DNS configuration, and Nginx/Gunicorn optimization.",
      "Automated scheduled monitoring scripts for departmental alerting, error handling, and real-time data oversight.",
    ],
    tags: [
      "Python",
      "Django REST",
      "GCP",
      "ETL Pipelines",
      "CI/CD",
      "Nginx/Gunicorn",
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
