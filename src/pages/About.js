import image from "../img/R0000005.JPG";

function MyButton() {
  return <button>Button</button>;
}

const user = {
  name: "Vincent Lee",
  imageUrl: image,
  imageSize: 180,
};

export default function About() {
  return (
    <>
      <h1>About</h1>
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
      <p>
        I want to express my confidence and desire to overcome challenges. I
        devote a lot of time to solving any situation that arises. As part of
        the IT department as a software engineer, I work alongside my colleagues
        to solve bugs that occur either within the database or the portal pages.
        Even if the code was too foreign to comprehend at first glance, I
        dedicated the time to asking questions and suggesting solutions that
        might assist in debugging the matter. I have solved numerous issues,
        including hardware, code bugs, and WMS issues.
      </p>
      <p>
        Taking a lead role in a project from scratch and dealing with live
        orders for thousands of customers. It was a partnership with another
        company to allow data flow into our warehouse management system (WMS). I
        developed an API that needed to communicate between the two systems and
        had to set up both the testing and production environments from scratch.
        I did not have any knowledge before being given this task, but I was
        able to achieve in making it work promptly.
      </p>
    </>
  );
}
