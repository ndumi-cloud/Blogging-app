/* eslint-disable no-unused-vars */
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <p>This is a blog app created using React.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@blogapp.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Social</h3>
          <ul className="social-links">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Blog App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;