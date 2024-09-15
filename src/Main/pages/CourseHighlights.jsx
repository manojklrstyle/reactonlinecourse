import React from 'react';
import { FaUserFriends, FaBook, FaCogs, FaUserGraduate, FaQuestionCircle, FaTools, FaFlagCheckered } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import Navbar1 from '../components/Navbar1';

const CourseHighlights = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: '100vh',
    padding: '20px',
    backgroundColor: '#f5f7fa',
  };

  const highlightStyle = {
    flex: '1 1 calc(25% - 20px)', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#fff', 
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', 
  };

  const iconStyle = {
    fontSize: '3.5rem', 
    marginBottom: '15px',
    color: '#2d88ff',
  };

  const titleStyle = {
    fontWeight: '700',
    fontSize: '2rem',
    margin: '10px 0',
    color: '#333', 
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#777', 
  };

  const buttonStyle = {
    marginTop: '40px',
    padding: '15px 30px',
    fontSize: '1.2rem',
    backgroundColor: '#2d88ff',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
  };

  const mobileStyles = {
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      flex: '1 1 100%', 
    },
  };

  const highlights = [
    { icon: <FaUserFriends />, title: '115+', description: 'Live Sessions' },
    { icon: <FaBook />, title: '530+', description: 'Self-Paced Learning Resources' },
    { icon: <FaCogs />, title: '230+', description: 'Assignments & Projects' },
    { icon: <FaUserGraduate />, title: '60+', description: 'Practice & Aptitude Tests' },
    { icon: <FaQuestionCircle />, title: 'Live', description: 'Doubt Clarification' },
    { icon: <FaTools />, title: 'Labs', description: 'For Hands-On Practice' },
    { icon: <FaFlagCheckered />, title: 'Job Portal', description: 'with 100+ Jobs' },
    { icon: <GiSkills />, title: 'Flexible', description: 'EMI Options' },
  ];

  return (
    <>  

     <Navbar1/>
   

    <div className="container" style={containerStyle}>
      {highlights.map((highlight, index) => (
        <div
          key={index}
          style={{ ...highlightStyle, ...(window.innerWidth <= 768 ? mobileStyles : {}) }}
        >
          <div style={iconStyle}>{highlight.icon}</div>
          <div>
            <h3 style={titleStyle}>{highlight.title}</h3>
            <p style={descriptionStyle}>{highlight.description}</p>
          </div>
        </div>
      ))}
      <button style={buttonStyle}>500+ Hiring Organizations</button>
    </div>
    </>
  );
};

export default CourseHighlights;
