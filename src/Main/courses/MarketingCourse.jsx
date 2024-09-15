import React, { useContext } from 'react';
import { marketingData } from '../data/marketingData';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import { CartContext } from '../../context/CartContext';
import '../../App.css'; 

const MarketingCourse = () => {
  let { id } = useParams();
  const course = marketingData.find((item) => item.id === id);
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
            title="Marketing Transformation"
            content="70% of marketing professionals who completed our digital marketing course reported a noticeable increase in ROI from their campaigns."
          />
          <Card
            title="Social Media Success"
            content="85% of users who applied our social media marketing strategies saw a significant improvement in engagement and reach."
          />
          <Card
            title="Strategic Insights"
            content="80% of participants in our marketing strategy course successfully developed and implemented effective marketing plans."
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

export default MarketingCourse;
