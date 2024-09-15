import React from 'react';
import { uiuxData } from '../data/uiuxData';
import { Link } from 'react-router-dom';
import '../../App.css'; 
import Navbar1 from '../components/Navbar1';



const UiUxDeveloper = () => {
  return (
    <>
      <Navbar1/>
      <div className="uiuxContainer">
        {/* Sidebar */}
        <div className="sidebar">
          <h3 className="sidebarHeading">Explore Courses</h3>
          <ul className="sidebarList">
            <li className="sidebarItem">
              <Link to={'/datascience'} className="link">Data Science and AI</Link>
            </li>
            <li className="sidebarItem">
              <Link to={'/uiuxdeveloper'} className="link">UiUx Developer</Link>
            </li>
            <li className="sidebarItem">
              <Link to={'/fullstack'} className="link">Full Stack</Link>
            </li>
            <li className="sidebarItem">
              <Link to={'/uiuxdeveloper'} className="link">Programming & UI/UX</Link>
            </li>
            <li className="sidebarItem">
              <Link to={'/marketing'} className="link">Marketing</Link>
            </li>
            <li className="sidebarItem">
              <Link to={'/marketing'} className="link">Finance</Link>
            </li>
            <li className="sidebarItem">
              <Link to={'/ourcourses'} className="link">Bootcamps</Link>
            </li>
            <li className="sidebarItem">
              <Link to={'/ourcourses'} className="link">Executive Programs</Link>
            </li>
            <li className="sidebarItem">
              <Link to={'/fullstack'} className="link">Degree Programs</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="uiuxMainContent">
          <div className="uiuxGrid">
            {uiuxData.map((item) => (
              <Link to={`/uiuxdeveloper/${item.id}`} key={item.id} className="link">
                <div className="productCard">
                  <img src={item.image} alt={item.title} className="productImage" />
                  <div className="productInfo">
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

export default UiUxDeveloper;
