import "../styles/styles.css";
import "../styles/Skills.css";
import python_icon from "../img/python-svgrepo-com.svg";
import mysql_icon from "../img/mysql-logo-svgrepo-com.svg";
import mongodb_icon from "../img/mongodb-svgrepo-com.svg";
import javascript_icon from "../img/javascript-svgrepo-com.svg";
import html_icon from "../img/html-5-svgrepo-com.svg";
import gcp_icon from "../img/gcp-svgrepo-com.svg";
import django_icon from "../img/django-svgrepo-com.svg";
import css_icon from "../img/css-3-svgrepo-com.svg";
import nginx_icon from "../img/nginx-svgrepo-com.svg";
import cpp_icon from "../img/c-plus-plus-svgrepo-com.svg";
import { motion } from "motion/react";

const skills = [
  { icon: python_icon, name: "Python" },
  { icon: mysql_icon, name: "SQL" },
  { icon: mongodb_icon, name: "MongoDB" },
  { icon: javascript_icon, name: "JavaScript" },
  { icon: html_icon, name: "HTML" },
  { icon: css_icon, name: "CSS" },
  { icon: gcp_icon, name: "GCP" },
  { icon: django_icon, name: "Django" },
  { icon: nginx_icon, name: "Nginx" },
  { icon: cpp_icon, name: "C++" },
];

export default function Skills() {
  return (
    <div id="Skills" className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: idx * 0.1 },
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            }}
            viewport={{ once: true }}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <div className="skill-label">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
