import React from "react";

function Footer() {
  return (
    <footer className="w3-row-padding w3-padding-32" style={{ backgroundColor: "#1a1a2e", color: "white" }}>
      <div className="w3-third">
        <h3>CONTACT US</h3>
        <p>Address: 123 Printing Street, Print City, PC 12345</p>
        <p>Phone: (123) 456-7890</p>
        <p>
          Email: <a href="mailto:info@jonasprint.com">info@jonasprint.com</a>
        </p>
        <p>
          <a href="/contact">Contact Form</a>
        </p>
      </div>

      <div className="w3-third">
        <h3>SEND US YOUR IDEAS</h3>
        <ul className="w3-ul w3-hoverable">
          <li className="w3-padding-16">
            <a
              href="https://wa.me/+18323732934?text=Hello,%20I%20would%20like%20to%20send%20you%20my%20logo%20ideas."
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/assets/logos/whatsapp-logo.png"
                className="w3-left w3-margin-right"
                style={{ width: "15%" }}
                alt="WhatsApp"
              />
              <span className="w3-large">WhatsApp Us.</span>
              <br />
              <span>Tell us about your ideas!</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="w3-third w3-serif">
        <h3>POPULAR TAGS</h3>
        <p>
          <span class="w3-tag w3-black w3-margin-bottom">Logos</span>{" "}
          <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
            Ideas
          </span>{" "}
          <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
            Creativity
          </span>{" "}
          <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
            Brand
          </span>{" "}
          <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">
            Design
          </span>{" "}
        </p>
        <div class="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://facebook.com/jonasprint" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com/jonasprint" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-newsletter">
          <h3>Newsletter</h3>
          <form action="/subscribe" method="post">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            ></input>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="footer-legal">
        <p>&copy; 2024 Jonas Print. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
