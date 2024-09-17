import React, { useContext } from 'react';
import { uiuxData } from '../data/uiuxData';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import { CartContext } from '../../context/CartContext'; 
import '../../App.css'; 

const UiUxCourse = () => {
  let { id } = useParams();
  const course = uiuxData.find((item) => item.id === id);
  const { dispatch } = useContext(CartContext);  

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: course });
  };

  return (
    <>
      <Navbar />
      <div className="course-container">
        <div className="course-grid">
          {/* Course Image */}
          <div className="course-image-container">
            <img src={course.image} alt={course.title} className="course-image" />
          </div>

          {/* Course Info */}
          <div className="course-info">
            <h2 className="course-title">{course.title}</h2>
            <h4 className="course-platform">{course.platform}</h4>
            <p className="course-description">{course.description}</p>
            <p><strong>Price:</strong> {course.price}</p>
            <button className="button button-primary" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

        {/* Additional Cards */}
        <div className="additional-cards">
          <Card
            title="Full-Stack Development Success"
            content="85% of participants in our full-stack development program secured new job opportunities or career advancements within six months of completion."
          />
          <Card
            title="AI and Machine Learning Impact"
            content="90% of learners in our AI and machine learning courses successfully implemented advanced AI solutions in their projects."
          />
          <Card
            title="Marketing Transformation"
            content="70% of marketing professionals who completed our digital marketing course reported a noticeable increase in ROI from their campaigns."
          />
          <Card
            title="DevOps Efficiency"
            content="80% of DevOps engineers who undertook our DevOps training experienced a significant reduction in deployment times."
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

export default UiUxCourse;
