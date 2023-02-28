import React from "react";
import './Contact.css';
export default function Contact() {
  return (
    <div>
      <div className="contact_from_container">
        <form className="contact_form">
          <h2>
            <b>CONTACT US</b>
          </h2>

          <b>
            <p type="Name:">
              <input placeholder="Write your name here.."></input>
            </p>
          </b>
          <p type="Email:">
            <input placeholder="Let us know how to contact you back.."></input>
          </p>
          <p type="Message:">
            <input placeholder="What would you like to tell us.."></input>
          </p>
          <button>
            <b>Send Message</b>
          </button>
          <div>
            <span class="fa fa-phone"></span>
            <b>📞 001 1023 567</b>
            <span className="fa fa-envelope-o"></span> <b>📩 contact@company.com</b>
          </div>
        </form>
      </div>
    </div>
  );
}
