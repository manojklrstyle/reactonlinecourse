// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Main/components/Landing';
import UiUxDeveloper from './Main/pages/UiUxDeveloper';
import UiUxCourse from './Main/courses/UiUxCourse';
import Login from './Main/components/Login';
import Signup from './Main/components/SignUp';
import { Navbar } from 'react-bootstrap';
import CourseHighlights from './Main/pages/CourseHighlights';
import Dashboard from './Main/components/Dashboard';
import Cart from './Main/components/Cart'; 
import { CartProvider } from './context/CartContext'; 
import OurCourses from './Main/components/OurCourses';
import Placements from './Main/components/Placements';
import DataScience from './Main/pages/DataScience';
import DataScienceCourse from './Main/courses/DataScienceCourse';
import FullStack from './Main/pages/FullStack';
import FullStackCourse from './Main/courses/FullStackCourse';
import Marketing from './Main/pages/Marketing';
import MarketingCourse from './Main/courses/MarketingCourse';
import Contact from './Main/pages/Contact';

const App = () => {
  return (
    <CartProvider>
      <div>
        <Router basename="/reactonlinecourse"> {/* Updated with basename */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ourcourses" element={<OurCourses />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/uiuxdeveloper" element={<UiUxDeveloper />} />
            <Route path="/uiuxdeveloper/:id" element={<UiUxCourse />} />
            <Route path="/datascience" element={<DataScience />} />
            <Route path="/datascience/:id" element={<DataScienceCourse />} />
            <Route path="/fullstack" element={<FullStack />} />
            <Route path="/fullstack/:id" element={<FullStackCourse />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/marketing/:id" element={<MarketingCourse />} />
            <Route path="/coursehighlights" element={<CourseHighlights />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
};

export default App;
