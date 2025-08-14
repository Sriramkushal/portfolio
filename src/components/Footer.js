import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* About Section */}
          <div className="footer-section">
            <p>
              Thank you for visiting my portfolio. I'm passionate about creating engaging user experiences and
              continuously improving my skills.
            </p>
            <div className="social-icons">
              <a href="tel:+918500361116" aria-label="Call on WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/kushalvuppala" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/Sriramkushal" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sriramkushal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="footer-section">
            <h5>Links</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4>Address</h4>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> Near SBI Bank, Peddapuram, Kakinada District, AP</p>
              <p><i className="fab fa-whatsapp"></i> +91 8500361116</p>
              <p><i className="fas fa-envelope"></i> kushalvuppala@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
