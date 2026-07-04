import "../styles/Certifications.css";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";

const terminalLines = [
  { type: "cmd", text: "vincent@edge-sw1> enable" },
  { type: "cmd", text: "vincent@edge-sw1# show certifications" },
  { type: "out", text: "Credential                     Status" },
  { type: "out", text: "-----------------------------  -------------" },
  { type: "hl", text: "CCNA 200-301                   IN PROGRESS" },
  { type: "out", text: "B.S. Computer Science (CSUF)   COMPLETED" },
  { type: "cmd", text: "vincent@edge-sw1# show study-topics" },
  {
    type: "out",
    text: "Subnetting  VLANs  OSPF  ACLs  NAT  STP  IPv6",
  },
  { type: "prompt", text: "vincent@edge-sw1# " },
];

const ccnaTopics = [
  "Routing & Switching",
  "Subnetting",
  "VLANs & Trunking",
  "OSPF",
  "ACLs & NAT",
  "Network Security",
];

export default function Certifications() {
  return (
    <section id="Certifications" className="certs-section">
      <span className="section-eyebrow">Always Learning</span>
      <h1 className="section-heading">Certifications &amp; Studies</h1>
      <p className="section-sub">
        Building on production cloud experience with formal networking
        fundamentals &mdash; currently preparing for the Cisco CCNA.
      </p>

      <div className="certs-inner">
        {/* Left: Cisco-style terminal */}
        <motion.div
          className="cert-terminal"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="cert-terminal-bar">
            <span className="term-dot term-dot-r" />
            <span className="term-dot term-dot-y" />
            <span className="term-dot term-dot-g" />
            <span className="cert-terminal-title">
              ssh vincent@lab &mdash; console
            </span>
          </div>
          <div className="cert-terminal-body">
            {terminalLines.map((line, i) => (
              <motion.pre
                key={i}
                className={`term-line term-${line.type}`}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.25, delay: 0.35 + i * 0.22 },
                }}
                viewport={{ once: true }}
              >
                {line.text}
                {line.type === "prompt" && (
                  <span className="term-cursor" aria-hidden="true" />
                )}
              </motion.pre>
            ))}
          </div>
        </motion.div>

        {/* Right: credential cards */}
        <div className="cert-cards">
          <motion.div
            className="cert-card cert-card-active"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="cert-card-head">
              <span className="cert-icon">
                <i className="bi bi-hdd-network" />
              </span>
              <div>
                <h3 className="cert-name">Cisco CCNA (200-301)</h3>
                <p className="cert-org">Cisco Certified Network Associate</p>
              </div>
              <span className="cert-status in-progress">In Progress</span>
            </div>
            <p className="cert-desc">
              Self-paced study and hands-on labs in Packet Tracer &mdash;
              routing protocols, VLAN design, subnetting, and network security
              fundamentals.
            </p>
            <div className="cert-progress" aria-hidden="true">
              <motion.span
                className="cert-progress-fill"
                initial={{ width: 0 }}
                whileInView={{
                  width: "62%",
                  transition: { duration: 1.1, delay: 0.3, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              />
            </div>
            <div className="cert-topics">
              {ccnaTopics.map((topic) => (
                <span key={topic} className="cert-topic">
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.15 },
            }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="cert-card-head">
              <span className="cert-icon cert-icon-alt">
                <i className="bi bi-mortarboard" />
              </span>
              <div>
                <h3 className="cert-name">B.S. Computer Science</h3>
                <p className="cert-org">
                  California State University, Fullerton &middot; 2022
                </p>
              </div>
              <span className="cert-status done">Completed</span>
            </div>
            <p className="cert-desc">
              Foundation in algorithms, data structures, software design, and
              full-stack development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
