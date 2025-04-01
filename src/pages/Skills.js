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

export default function Skills() {
  return (
    <>
      <div id="Skills" className="center-vertical page">
        <h1 className="center text-center border2">Skills</h1>

        <div className="skill-icons">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            <div className="skill-icons-row">
              <div className="icon">
                <img
                  src={python_icon}
                  class="pg-icon img-fluid"
                  alt="python"
                ></img>
                <div>Python</div>
              </div>
              <div className="icon">
                <img src={mysql_icon} class="pg-icon img-fluid" alt="sql"></img>
                <div>SQL</div>
              </div>
              <div className="icon">
                <img
                  src={mongodb_icon}
                  class="pg-icon img-fluid"
                  alt="mongodb"
                ></img>
                <div>MongoDB</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
            viewport={{ once: true }}
          >
            <div className="skill-icons-row">
              <div className="icon">
                <img
                  src={javascript_icon}
                  class="pg-icon img-fluid"
                  alt="javascript"
                ></img>
                <div>JavaScript</div>
              </div>
              <div className="icon">
                <img src={html_icon} class="pg-icon img-fluid" alt="html"></img>
                <div>HTML</div>
              </div>
              <div className="icon">
                <img src={gcp_icon} class="pg-icon img-fluid" alt="gcp"></img>
                <div>GCP</div>
              </div>
              <div className="icon">
                <img
                  src={django_icon}
                  class="pg-icon img-fluid"
                  alt="django"
                ></img>
                <div>Django</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 3 } }}
            viewport={{ once: true }}
          >
            <div className="skill-icons-row">
              <div className="icon">
                <img src={css_icon} class="pg-icon img-fluid" alt="css"></img>
                <div>CSS</div>
              </div>
              <div className="icon">
                <img
                  src={nginx_icon}
                  class="pg-icon img-fluid"
                  alt="nginx"
                ></img>
                <div>Nginx</div>
              </div>
              <div className="icon">
                <img src={cpp_icon} class="pg-icon img-fluid" alt="c++"></img>
                <div>C++</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
