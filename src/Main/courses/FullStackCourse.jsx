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
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: course });
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
            <h2>{course.title}</h2>
            <h4>{course.platform}</h4>
            <p>{course.description}</p>
            <p><strong>Price:</strong> {course.price}</p>
            <button className="btn btn-primary" style={{ marginTop: '20px' }} onClick={addToCart}>Add to Cart</button>
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
    <h4>{title}</h4>
    <p>{content}</p>
  </div>
);

export default FullStackCourse;
