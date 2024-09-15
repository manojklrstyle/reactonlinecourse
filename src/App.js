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
        <Router>
        
          <Routes>
            <Route path="/reactonlinecourse" element={<Login/>}></Route>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/landing" element={<Landing/>}></Route>
            <Route path="/ourcourses" element={<OurCourses/>}></Route>
            <Route path="/placements" element={<Placements/>}></Route>
            <Route path="/uiuxdeveloper" element={<UiUxDeveloper />}></Route>
            <Route path="/uiuxdeveloper/:id" element={<UiUxCourse/>}></Route>
            <Route path="/datascience" element={<DataScience/>}></Route>
            <Route path="/datascience/:id" element={<DataScienceCourse/>}></Route>
            <Route path="/fullstack" element={<FullStack/>}></Route>
            <Route path="/fullstack/:id" element={<FullStackCourse/>}></Route>
            <Route path="/marketing" element={<Marketing/>}></Route>
            <Route path="/marketing/:id" element={<MarketingCourse/>}></Route>
            <Route path="/coursehighlights" element={<CourseHighlights/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route> {/* Add route for Cart */}
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
};

export default App;
