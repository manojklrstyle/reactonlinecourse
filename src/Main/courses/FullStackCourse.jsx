import React, { useContext } from 'react';
import { fsData } from '../data/fsData';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import { CartContext } from '../../context/CartContext';
import '../../App.css'; 

const FullStackCourse = () => {
  let { id } = useParams();
  const course = fsData.find((item) => item.id === id);
  const { addToCart } = useContext(CartContext); 

  const handleAddToCart = () => {
    addToCart(course); 
  };

  return (
    <>
      <Navbar />
      <div className="course-container">
        <div className="course-grid">
          <div className="course-image-container">
            <img src={course.image} alt={course.title} className="course-image" />
          </div>
          <div className="course-info">
            <h2 className="course-title">{course.title}</h2>
            <h4 className="course-platform">{course.platform}</h4>
            <p className="course-description">{course.description}</p>
            <p><strong>Price:</strong> {course.price}</p>
            <button className="button button-primary" style={{ marginTop: '20px' }} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
        <div className="additional-cards">
          <Card
            title="Full-Stack Development Success"
            content="85% of participants in our full-stack development program secured new job opportunities or career advancements within six months of completion."
          />
          <Card
            title="Comprehensive Skill Set"
            content="90% of our graduates have reported successfully using both front-end and back-end skills in their new roles."
          />
          <Card
            title="Career Advancement"
            content="80% of learners who completed our full-stack course experienced a notable increase in job responsibilities and salary."
          />
        </div>
      </div>
    </>
  );
};

const Card = ({ title, content }) => (
  <div className="card">
    <h4 className="card-header">{title}</h4>
    <p className="card-body">{content}</p>
  </div>
);

export default FullStackCourse;
