import "../styles/Contact.css";
import "../styles/styles.css";

export default function Contact() {
  return (
    <>
      <div id="Contact" className="center-vertical page">
        <h1 className="center">Contact Me</h1>
        <div>
          Leave your details and I'll get back to you as soon as possible.
        </div>
        <br></br>
        <form className="center">
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
        </form>
      </div>
    </>
  );
}
