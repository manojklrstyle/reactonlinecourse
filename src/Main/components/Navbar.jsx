import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav style={navbarStyles.navbar}>
      <div style={navbarStyles.mainContainer}>
        <div style={navbarStyles.leftSection}>
          <button style={navbarStyles.menuButton} onClick={toggleSidebar}>
            ☰
          </button>
          <div style={navbarStyles.brand}>COURSELY</div>
        </div>

        <div style={navbarStyles.centerSection}>
          <form style={navbarStyles.searchForm}>
            <input
              style={navbarStyles.searchInput}
              type="search"
              placeholder="Courses"
              aria-label="Search"
            />
            <button style={navbarStyles.searchButton} type="button">
              Search
            </button>
          </form>
        </div>

        <div style={navbarStyles.rightSection}>
          <div style={navbarStyles.authContainer}>
            <Link to="/login" style={navbarStyles.linkButton}>
              <button style={navbarStyles.loginButton}>Log in</button>
            </Link>
            <Link to="/signup" style={navbarStyles.linkButton}>
              <button style={navbarStyles.signupButton}>Join for Free</button>
            </Link>
            <Link to="/cart" style={navbarStyles.linkButton}>
              <ShoppingCartIcon style={navbarStyles.cartIcon} />
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={sidebarRef}
        style={{
          ...navbarStyles.sidebarContainer,
          ...(sidebarOpen ? navbarStyles.sidebarContainerOpen : {}),
        }}
      >
        <h3 style={navbarStyles.sidebarHeading}>Explore</h3>
        <ul style={navbarStyles.sidebarList}>
          <li style={navbarStyles.sidebarItem}>
            <Link to="/uiuxdeveloper" style={navbarStyles.sidebarLink}>UI/UX Developer</Link>
          </li>
          <li style={navbarStyles.sidebarItem}>
            <Link to="/ourcourses" style={navbarStyles.sidebarLink}>Our Courses</Link>
          </li>
          <li style={navbarStyles.sidebarItem}>
            <Link to="/coursehighlights" style={navbarStyles.sidebarLink}>CourseHighlights</Link>
          </li>
          <li style={navbarStyles.sidebarItem}>
            <Link to="/contact" style={navbarStyles.sidebarLink}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const navbarStyles = {
  navbar: {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 5%',
    borderBottom: '1px solid #e0e0e0',
    flexWrap: 'wrap',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  centerSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  brand: {
    fontWeight: '700',
    fontSize: '20px',
    color: '#0056D2',
    textDecoration: 'none',
    marginLeft: '15px',
    marginRight:'15px',
  },
  searchForm: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  searchInput: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '4px 0 0 4px',
    border: '1px solid #e0e0e0',
    fontSize: '14px',
    outline: 'none',
  },
  searchButton: {
    padding: '10px 15px',
    backgroundColor: '#0056D2',
    border: 'none',
    color: 'white',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  },
  authContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  linkButton: {
    textDecoration: 'none',
  },
  loginButton: {
    marginRight: '8px',
    padding: '8px 12px',
    border: '1px solid #0056D2',
    backgroundColor: 'transparent',
    color: '#0056D2',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s, color 0.3s',
  },
  signupButton: {
    padding: '8px 12px',
    backgroundColor: '#0056D2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s',
    marginRight: '8px',
  },
  cartIcon: {
    color: '#333',
    cursor: 'pointer',
    transition: 'color 0.3s',
    fontSize: '28px', 
  },
  menuButton: {
    backgroundColor: '#0056D2',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  sidebarContainer: {
    display: 'none',
    backgroundColor: '#ffffff',
    padding: '20px',
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100vh',
    width: '250px',
    zIndex: '100',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    transform: 'translateX(-100%)',
  },
  sidebarContainerOpen: {
    display: 'block',
    transform: 'translateX(0)',
  },
  sidebarHeading: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  sidebarList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  sidebarItem: {
    padding: '10px 0',
    fontSize: '18px',
    fontWeight: '500',
    color: '#555',
    borderBottom: '1px solid #e0e0e0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  sidebarLink: {
    textDecoration: 'none',
    color: '#555',
  },

  /* Media Queries for Responsive Design */
  '@media (max-width: 768px)': {
    mainContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    leftSection: {
      order: 1,
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: '15px',
    },
    centerSection: {
      order: 3,
      width: '100%',
      marginTop: '15px',
    },
    rightSection: {
      order: 2,
      width: 'auto',
    },
    authContainer: {
      flexDirection: 'row',
    },
    searchForm: {
      maxWidth: '100%',
    },
    loginButton: {
      padding: '6px 10px',
      fontSize: '12px',
    },
    signupButton: {
      padding: '6px 10px',
      fontSize: '12px',
    },
    brand: {
      fontSize: '18px',
    },
    searchInput: {
      '::placeholder': {
        content: "'Courses'",
      },
    },
  },
};

export default Navbar;