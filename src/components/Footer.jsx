import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import "./Footer.css";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer">
      <Box id ="footer">

      <div className="footer-container">
        <h2 className="footer-title">Get In Touch</h2>
        <p className="footer-description">
          Ready to bring your ideas to life? Let's collaborate! Whether you're a
          startup, established company, or individual with a vision, I’m here to
          help. From concept to execution, let's create something amazing together.
        </p>

        <div className="footer-contact">
          <div className="footer-item">
            <FaEnvelope />
            <h4>kpraveenhosur@gmail.com</h4>
          </div>
        </div>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/itspraveenk/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>
          {/* <a href="#" aria-label="YouTube"><FaYoutube /></a>*/}
          <a href="#" aria-label="Instagram"><FaInstagram /></a> 
          {/* <a href="#" target="_blank" aria-label="Twitter"><FaTwitter /></a> */}
        </div>

        <p className="footer-credit">
         <strong> © Designed by Praveen K</strong>
        </p>
      </div>
      </Box>
    </footer>
  );
};

export default Footer;
