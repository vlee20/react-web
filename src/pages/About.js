import image from "../img/pp.JPG";
import "../styles/About.css";
import "../styles/styles.css";
import { motion } from "motion/react";

const user = {
  name: "Vincent Lee",
  imageUrl: image,
  imageSize: 160,
};

export default function About() {
  return (
    <section id="About" className="about-section page-background">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <img
          className="about-avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          width={user.imageSize}
          height={user.imageSize}
        />
        <h2 className="about-name">{user.name}</h2>
        <div className="about-description">
          <p>
            I am a data-driven developer with a strong foundation in Python and
            extensive experience working on integration projects and data
            manipulation. Using tools like Pandas, I’ve successfully transformed
            and automated workflows, ensuring efficiency and reliability in
            complex systems.
          </p>
          <p>
            Having led integration and automation projects, I understand the
            nuances of managing data flow, API development, and seamless system
            migrations. My full-stack development experience—ranging from
            front-end technologies like Bootstrap, JavaScript, and jQuery to
            back-end connections with MSSQL and TSQL—positions me well to work
            on both customer-facing user interfaces and backend integrations.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
