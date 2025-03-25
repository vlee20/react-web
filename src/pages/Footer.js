import "../styles/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer>
      <div className="center-horizontal">
        <a
          href="
        https://www.linkedin.com/in/vlee20/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "10px" }}
        >
          <i className="bi bi-linkedin fs-3"></i>
        </a>
        <a
          href="https://github.com/vlee20"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "10px" }}
        >
          <i className="bi bi-github fs-3"></i>
        </a>
      </div>
      <p className="center-horizontal">Created by Vincent Lee © 2025</p>
    </footer>
  );
}
