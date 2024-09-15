import React, { useContext } from 'react';
import { dsData } from '../data/dsData';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import { CartContext } from '../../context/CartContext';
import '../../App.css'; 

const DataScienceCourse = () => {
  let { id } = useParams();
  const course = dsData.find((item) => item.id === id);
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
            <h2 className="course-title">{course.title}</h2>
            <h4 className="course-platform">{course.platform}</h4>
            <p className="course-description">{course.description}</p>
            <p><strong>Price:</strong> {course.price}</p>
            <button className="button button-primary" style={{ marginTop: '20px' }} onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
        <div className="additional-cards">
          <Card
            title="Data Science Career Growth"
            content="85% of data science graduates from our program reported a significant career advancement within the first six months."
          />
          <Card
            title="AI Skills in Demand"
            content="90% of employers are seeking professionals with AI and machine learning skills, as reported by industry surveys."
          />
          <Card
            title="Effective Data Analysis"
            content="75% of learners in our data analysis course have successfully implemented actionable insights in their organizations."
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

export default DataScienceCourse;
