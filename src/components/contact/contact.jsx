import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3urtx0u",
        "template_w4wmeqm",
        form.current,
        "zuLZGmR6OOOHAwMCY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="./assets/shake.svg" alt="shake hand"></img>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Submit</button>
          {submitted && <span>Thank you. I'll reply you ASAP.</span>}
        </form>
      </div>
    </div>
  );
}
