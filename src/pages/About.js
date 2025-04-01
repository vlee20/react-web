import image from "../img/CANTI.jpg";
import "../styles/About.css";
import "../styles/styles.css";
import { motion } from "motion/react";

const user = {
  name: "Vincent Lee",
  imageUrl: image,
  imageSize: 340,
};

export default function About() {
  return (
    <>
      <div
        id="About"
        className="center-vertical page container-fluid"
        style={{}}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 3 } }}
          viewport={{ once: true }}
        >
          <h1 className="center text-center border2">About</h1>
          <div id="AbtCont" className="abt border1 container-fluid">
            <div className="center-vertical text-center">
              <img
                className="avatar img-fluid"
                src={user.imageUrl}
                alt={"Photo of " + user.name}
              />
              <h2>{user.name}</h2>
            </div>
            <div className="center-vertical text-center">
              <p>
                I am a data-driven developer with a strong foundation in Python
                and extensive experience working on integration projects and
                data manipulation. Using tools like Pandas, I’ve successfully
                transformed and automated workflows, ensuring efficiency and
                reliability in complex systems.
              </p>
              <p>
                Having led integration and automation projects, I understand the
                nuances of managing data flow, API development, and seamless
                system migrations. My full-stack development experience—ranging
                from front-end technologies like Bootstrap, JavaScript, and
                jQuery to back-end connections with MSSQL and TSQL—positions me
                well to work on both customer-facing user interfaces and backend
                integrations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
