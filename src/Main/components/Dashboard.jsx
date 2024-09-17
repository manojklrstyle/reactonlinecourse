import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FaBook, FaUniversity, FaUserGraduate } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import dashImage from '../assets/dashboard/dash1.jpg'; 

const Dashboard = () => {
  return (
    <>
      <Navbar/>

      <div style={dashboardStyles.container}>
        <div style={dashboardStyles.row}>

          {/* Left Card */}
          <div style={dashboardStyles.leftCard}>
            <h2 style={dashboardStyles.title}>Learn without limits</h2>
            <p style={dashboardStyles.description}>
              Start, switch, or advance your career with more than 7,000 courses, 
              Professional Certificates, and degrees from world-class universities and companies.
            </p>
            <div style={dashboardStyles.buttonContainer}>
              <Link to="/signup" style={dashboardStyles.primaryButton}>Join for Free</Link>
              <Link to="/ourcourses" style={dashboardStyles.secondaryButton}>Try our Courses</Link>
            </div>
            <div style={dashboardStyles.statsContainer}>
              <div style={dashboardStyles.stat}>
                <FaBook style={dashboardStyles.icon} /> {/* react Icon for Courses */}
                <h3 style={dashboardStyles.statNumber}>7,000+</h3>
                <p style={dashboardStyles.statDescription}>Courses</p>
              </div>
              <div style={dashboardStyles.stat}>
                <FaUniversity style={dashboardStyles.icon} /> {/* react icon for Universities */}
                <h3 style={dashboardStyles.statNumber}>100+</h3>
                <p style={dashboardStyles.statDescription}>Universities</p>
              </div>
              <div style={dashboardStyles.stat}>
                <FaUserGraduate style={dashboardStyles.icon} /> {/* react icon for learners */}
                <h3 style={dashboardStyles.statNumber}>10M+</h3>
                <p style={dashboardStyles.statDescription}>Learners</p>
              </div>
            </div>
          </div>

          {/* Right Card with Image */}
          <div style={dashboardStyles.rightCard}>
            <img 
              src={dashImage} 
              alt="Dashboard" 
              style={dashboardStyles.image} 
            />
            <div style={dashboardStyles.overlay}>
              <h2 style={dashboardStyles.overlayTitle}>Transform Your Career</h2>
              <p style={dashboardStyles.overlayDescription}>
                Take the first step towards a new career with our expert-led courses.
              </p>
              <Link to="/contact" style={dashboardStyles.overlayButton}> ABOUT US </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

const dashboardStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#e6f2ff',
    padding: '20px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    maxWidth: '1200px',
  },
  leftCard: {
    flex: 1,
    padding: '40px',
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginRight: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },
  rightCard: {
    flex: 1,
    padding: '0', 
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '20px', 
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px', 
  },
  primaryButton: {
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textDecoration: 'none', 
    textAlign: 'center',
  },
  secondaryButton: {
    padding: '12px 24px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textDecoration: 'none', 
    textAlign: 'center',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  statDescription: {
    fontSize: '18px',
    color: '#666',
  },
  icon: {
    fontSize: '40px',
    color: '#007bff',
    marginBottom: '10px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    borderRadius: '8px',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
  },
  overlayTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  overlayDescription: {
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '40px',
  },
  overlayButton: {
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textDecoration: 'none', 
    textAlign: 'center',
  },
  
  

  /* Responsive Styles */
  '@media (max-width: 768px)': {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
    },
    row: {
      flexDirection: 'column',
      alignItems: 'center', 
      width: '100%',
    },
    leftCard: {
      marginRight: '0',
      marginBottom: '20px',
      padding: '20px', 
    },
    rightCard: {
      height: '300px',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px', 
    },
    primaryButton: {
      padding: '10px 20px',
      fontSize: '14px',
    },
    secondaryButton: {
      padding: '10px 20px',
      fontSize: '14px',
    },
  },
};

export default Dashboard;
