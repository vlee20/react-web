import "../styles/Contact.css";
import "../styles/styles.css";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="Contact" className="contact-section page-background">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:vlee20@protonmail.com">vlee20@protonmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+16267577482">+1 (626) 757-7482</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/vlee20"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/vlee20
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/vlee20"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/vlee20
            </a>
          </p>
        </div>
        {/* Optional: Add a simple contact form below */}
        {/* <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form> */}
      </motion.div>
    </section>
  );
}
