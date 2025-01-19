import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <body id="Contact" className="center-vertical">
        <h1 class="center">Contact Me</h1>
        <br></br>
        <form class="center">
          <div class="input-group mb-3">
            <span class="input-group-text">First and last name</span>
            <input
              type="text"
              aria-label="First name"
              placeholder="First name"
              class="form-control"
            ></input>
            <input
              type="text"
              aria-label="Last name"
              placeholder="Last name"
              class="form-control"
            ></input>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
            ></input>
            <span class="input-group-text">@</span>
            <input
              type="text"
              class="form-control"
              placeholder="Server"
              aria-label="Server"
            ></input>
          </div>
          <div class="input-group mb-3">
            <textarea type="text" class="form-control"></textarea>
          </div>
          <button class="btn btn-primary input-group mb-3" type="submit">
            Send
          </button>
        </form>
      </body>
    </>
  );
}
