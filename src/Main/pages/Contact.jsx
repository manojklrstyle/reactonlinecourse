import React from 'react';
import '../../App.css'; 
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; 
import { FaLaptopCode, FaPencilRuler, FaDatabase, FaChartLine } from 'react-icons/fa'; 
import Navbar1 from '../components/Navbar1';

function Contact() {
  return (

    <>
       <Navbar1/>

    <div className="contact-container">
      <div className="contact-info">
        <div className="company-info">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Success Stories</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="resources-info">
          <h3>Resources</h3>
          <ul>
            <li>Events</li>
            <li>Learning Talks</li>
            <li>Blog</li>
            <li>Resource Suite</li>
            <li>Verify Certificate</li>
          </ul>
        </div>
        <div className="partnership-info">
          <h3>Partnership</h3>
          <ul>
            <li>Talent Solution</li>
            <li>Become A Mentor</li>
            <li>Training Solution</li>
          </ul>
        </div>
      </div>

      {/* Middle Section with Courses */}
      <div className="courses-grid">
        <div className="course-item">
          <FaLaptopCode className="course-icon" />
          <p>UI/UX Developer</p>
        </div>
        <div className="course-item">
          <FaDatabase className="course-icon" />
          <p>Data Science</p>
        </div>
        <div className="course-item">
          <FaChartLine className="course-icon" />
          <p>Digital Marketing</p>
        </div>
        <div className="course-item">
          <FaPencilRuler className="course-icon" />
          <p>Graphic Design</p>
        </div>
        <div className="course-item">
          <FaLaptopCode className="course-icon" />
          <p>Web Development</p>
        </div>
        <div className="course-item">
          <FaDatabase className="course-icon" />
          <p>AI & ML</p>
        </div>
        <div className="course-item">
          <FaChartLine className="course-icon" />
          <p>Cloud Computing</p>
        </div>
        <div className="course-item">
          <FaPencilRuler className="course-icon" />
          <p>Cyber Security</p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <p>© ManojTech Private Limited. All rights reserved</p>
        <ul className="footer-links">
          <li>Terms Of Use</li>
          <li>Privacy Policy</li>
          <li>Sitemap</li>
        </ul>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaLinkedin className="icon" />
          <FaInstagram className="icon" />
          <FaWhatsapp className="icon" />
        </div>
      </div>
    </div>

    </>
  );
}

export default Contact;
