import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import oc1 from '../assets/ourcourses/oc1.jpg';
import oc2 from '../assets/ourcourses/oc2.jpg';
import oc3 from '../assets/ourcourses/oc3.jpg';
import oc4 from '../assets/ourcourses/oc4.jpg';
import Navbar1 from './Navbar1';

const OurCourses = () => {
  return (

    <>

    <Navbar1/>
   
    <div className="our-courses-container">
      <div className="sidebar">
        <h2 className="sidebar-heading">Explore</h2>
        <ul className="sidebar-list">
          <li className="sidebar-item">Placements</li>
          <li className="sidebar-item">Careers</li>
          <li className="sidebar-item">Community</li>
          <li className="sidebar-item">Resources</li>
          <li className="sidebar-item">Achievements</li>
          <li className="sidebar-item">Contact Us</li>
        </ul>
      </div>
      
      <div className="our-courses-main-content">
        
        <div className="our-courses-cards">
          <Link to="/uiuxdeveloper" className="our-courses-card-link">
            <div className="our-courses-card">
              <img src={oc1} alt="Ui/Ux Developer" />
              <div className="our-courses-card-content">
                <h3>Ui/Ux Developer</h3>
                <p>Make progress toward a degree Professional Certificate</p>
              </div>
            </div>
          </Link>
          <Link to="/datascience" className="our-courses-card-link">
            <div className="our-courses-card">
              <img src={oc2} alt="Data Science" />
              <div className="our-courses-card-content">
                <h3>Data Science</h3>
                <p>Make progress toward a degree Professional Certificate</p>
              </div>
            </div>
          </Link>
          <Link to="/fullstack" className="our-courses-card-link">
            <div className="our-courses-card">
              <img src={oc3} alt="Full Stack" />
              <div className="our-courses-card-content">
                <h3>Full Stack</h3>
                <p>Make progress toward a degree Professional Certificate</p>
              </div>
            </div>
          </Link>
          <Link to="/marketing" className="our-courses-card-link">
            <div className="our-courses-card">
              <img src={oc4} alt="Marketing" />
              <div className="our-courses-card-content">
                <h3>Marketing</h3>
                <p>Make progress toward a degree Professional Certificate</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>

    </>
  );
};

export default OurCourses;
