import myImage from "./assets/MY.jpg";
function Welcome() {
  return (
    <div>
      <img src={myImage} alt="MY" />
      <br />
      <br />
      <p>Student Name : Dharmik Gajjar</p>
      <hr />
      <p>Profession : Student/Developer </p>
      <hr />
      <p>Course : Full Stack Development </p>
      <hr />
      <p>Institute : Red & White Institute </p>
      <hr />
      <p>Joining Date : 20 Sept 2025</p>
    <br />
    <br />
      <p id="box" ><h2>Aspiring Full Stack Developer</h2> A dedicated developer and Full Stack Development student with a strong passion for building modern, user-friendly web applications. Committed to continuous learning, improving technical expertise, and developing scalable solutions using current web technologies.</p>

    </div>
  );
}

export default Welcome;
