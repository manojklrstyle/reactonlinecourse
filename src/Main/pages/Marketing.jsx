import React from 'react';
import { marketingData } from '../data/marketingData';
import { Link } from 'react-router-dom';
import '../../App.css'; 
import Navbar1 from '../components/Navbar1';

const Marketing = () => {
  return (
    <>
      <Navbar1/>   
    
      <div className="uiux-container">
        <div className="sidebar">
          <h3 className="sidebar-heading">Explore Courses</h3>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <Link to={'/datascience'} className="link">Data Science and AI</Link>
            </li>
            <li className="sidebar-item">
              <Link to={'/uiuxdeveloper'} className="link">UiUx Developer</Link>
            </li>
            <li className="sidebar-item">
              <Link to={'/fullstack'} className="link">Full Stack</Link>
            </li>
            <li className="sidebar-item">
              <Link to={'/uiuxdeveloper'} className="link">Programming & UI/UX</Link>
            </li>
            <li className="sidebar-item">
              <Link to={'/marketing'} className="link">Finance</Link>
            </li>
            <li className="sidebar-item">
              <Link to={'/marketing'} className="link">Marketing</Link>
            </li>
            <li className="sidebar-item">
              <Link to={'/ourcourses'} className="link">Bootcamps</Link>
            </li>
            <li className="sidebar-item">
              <Link to={'/ourcourses'} className="link">Executive Programs</Link>
            </li>
            <li className="sidebar-item">
              <Link to={'/datascience'} className="link">Degree Programs</Link>
            </li>
          </ul>
        </div>
        
        <div className="uiux-main-content">
          <div className="uiux-grid">
            {marketingData.map((item) => (
              <Link to={`/marketing/${item.id}`} key={item.id} className="link">
                <div className="product-card">
                  <img src={item.image} alt={item.title} className="product-image" />
                  <div className="product-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
