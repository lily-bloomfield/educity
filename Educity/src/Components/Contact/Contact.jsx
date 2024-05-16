import React from "react";
import Title from "../Title/Title";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9333106c-5641-425f-afeb-7acb40778f9e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="container contact-container">
      <Title title="Get in Touch" subTitle="CONTACT US" />
      <div className="contact-container-div">
        <div className="contact-col-1">
          <h2>Send us a message</h2>
          <br />
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <br />
          <ul>
            <li>
              <i class="fa-solid fa-envelope"></i>Contact@Educity.dev
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>+1 123-456-7890
            </li>
            <li>
              <i class="fa-solid fa-location-dot"></i> Massachusetts Ave,
              Cambridge, United States
            </li>
          </ul>
        </div>
        <div className="contact-col-2">
          <form onSubmit={onSubmit}>
            <label>Name</label>
            <input placeholder="Enter your name" name="name" />
            <label>Email</label>
            <input placeholder="Enter your email" name="email" />
            <label>Write your messages here</label>
            <textarea placeholder="Enter message..." rows={6}></textarea>
            <button className="btn-contact" type="submit">
              Send Message <i class="fa-solid fa-arrow-right"></i>
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
