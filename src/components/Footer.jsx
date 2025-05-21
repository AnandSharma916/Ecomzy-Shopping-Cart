import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";  // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div className="footer-section">
          <h2 className="footer-logo">Ecomzy</h2>
          <p className="footer-description">
            Your one-stop destination for all your shopping needs.
          </p>
        </div>

        {/* Company Info */}
        <div className="footer-section">
          <h3 className="footer-title">Company</h3>
          <p>Propmpact Marketing Private Limited</p>
          <p>MSP, India</p>
          <p>Phone: +91-9876543210</p>
          <p>Email: contact@propmpact.in</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <nav aria-label="Quick links">
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        {/* Social Media */}
        <div className="footer-section social-media">
          <a href="https://www.facebook.com/propmpactmarketing" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/propmpactmktg" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/propmpactmarketing" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/propmpact-marketing" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Propmpact Marketing Private Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
