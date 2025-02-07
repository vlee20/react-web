import image from "../img/CANTI.jpg";
import "../styles/About.css";
import "../styles/styles.css";

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
        className="center-vertical page"
        style={{ backgroundColor: "#A1D2F4" }}
      >
        <h1 className="center text-center border2">About</h1>
        <div className="abt border1">
          <div className="center-vertical text-center">
            <img
              className="avatar"
              src={user.imageUrl}
              alt={"Photo of " + user.name}
              style={{
                width: user.imageSize,
                height: user.imageSize,
              }}
            />
            <h2>{user.name}</h2>
          </div>
          <div className="center-vertical text-center">
            <p>
              I am a data-driven developer with a strong foundation in Python
              and extensive experience working on integration projects and data
              manipulation. Using tools like Pandas, I’ve successfully
              transformed and automated workflows, ensuring efficiency and
              reliability in complex systems.
            </p>
            <p>
              I’m highly adaptable and quick to learn new technologies, as
              demonstrated when I set up testing and production environments
              from scratch on Google Cloud Platform for an API integration
              project with Overstock. While I had no prior experience with
              networking, I quickly familiarized myself with DNS configuration
              and SSL implementation to deliver a fully functional API.
            </p>
            <p>
              Having led integration and automation projects, I understand the
              nuances of managing data flow, API development, and seamless
              system migrations. My full-stack development experience—ranging
              from front-end technologies like Bootstrap, JavaScript, and jQuery
              to back-end connections with MSSQL and TSQL—positions me well to
              work on both customer-facing user interfaces and backend
              integrations.
            </p>
            <p>
              I thrive in fast-paced environments and bring an ambitious,
              self-driven attitude to my work. In previous roles, I’ve taken the
              initiative to solve challenging problems, automate processes, and
              streamline workflows. I’m drawn to the start-up culture because I
              enjoy contributing meaningfully to a team’s growth and success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
