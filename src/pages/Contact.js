import "../styles/Contact.css";
import "../styles/styles.css";

export default function Contact() {
  return (
    <>
      <div id="Contact" className="center-vertical page">
        <h1 className="center">Contact Me</h1>
        <br></br>
        <div class="container">
          <div class="contact-info" style={{ textAlign: "center" }}>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:vlee20@protonmail.com">vlee20@protonmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890">+1 (626) 757-7482</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/vlee20" target="_blank">
                linkedin.com/in/vlee20
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/vlee20" target="_blank">
                github.com/vlee20
              </a>
            </p>
          </div>
        </div>
        <br></br>
        {/* <form className="center">
          <div className="input-group mb-3">
            <span className="input-group-text">First and last name</span>
            <input
              type="text"
              aria-label="First name"
              placeholder="First name"
              className="form-control"
            ></input>
            <input
              type="text"
              aria-label="Last name"
              placeholder="Last name"
              className="form-control"
            ></input>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
            ></input>
            <span className="input-group-text">@</span>
            <input
              type="text"
              className="form-control"
              placeholder="Server"
              aria-label="Server"
            ></input>
          </div>
          <div className="input-group mb-3">
            <textarea
              type="text"
              className="form-control"
              placeholder="Message"
            ></textarea>
          </div>
          <button className="btn btn-primary input-group mb-3" type="submit">
            Send
          </button>
        </form> */}
      </div>
    </>
  );
}
