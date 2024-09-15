import React from 'react';
import { dsData } from '../data/dsData';
import { Link } from 'react-router-dom';
import '../../App.css'; 
import Navbar1 from '../components/Navbar1';

const DataScience = () => {
  return (
    <>
      <Navbar1/>

      <div className="uiux-container">
        {/* Sidebar */}
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
              <Link to={'/fullstack'} className="link">Degree Programs</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="uiux-main-content">
          <div className="uiux-grid">
            {dsData.map((item) => (
              <Link to={`/datascience/${item.id}`} key={item.id} className="link">
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

export default DataScience;
