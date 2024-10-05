import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Navbar, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ShoppingCart, BookOpen } from 'lucide-react';
import Navbar1 from './Navbar1';
import { Link } from 'react-router-dom';
import '../../App.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <>
      <Navbar1 />
      <Navbar bg="primary" variant="dark" className="mb-4">
        <Container></Container>
      </Navbar>
      
      <Container fluid className="p-4">
        <Row>
          <Col md={8} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="d-flex align-items-center mb-4">
                  <ShoppingCart className="me-2" />
                  Your Cart
                </Card.Title>
                {cartItems.length === 0 ? (
                  <div className="text-center py-5">
                    <BookOpen size={64} className="text-muted mb-3" />
                    <h4>Your cart is empty</h4>
                    <p className="text-muted">Explore our courses and start learning today!</p>
                    <Link to="/ourcourses">
                      <Button variant="primary">Browse Courses</Button>
                    </Link>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <Card key={item.id} className="mb-3">
                      <Card.Body>
                        <Row>
                          <Col xs={4} md={3} className="d-flex align-items-center">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="img-fluid rounded img-large"
                            />
                          </Col>
                          <Col xs={8} md={9}>
                            <h5>{item.title}</h5>
                            <p className="text-muted">{item.platform}</p>
                            <p className="font-weight-bold">Price: {item.price}</p>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => removeFromCart(item)}
                            >
                              Remove
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  ))
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <p>The price and availability of items are subject to change...</p>
                <form className="mb-3">
                  <label htmlFor="promoCode" className="form-label">
                    Promotional Code
                  </label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="promoCode" placeholder="Enter code" />
                    <Button variant="outline-secondary" type="button">
                      Apply
                    </Button>
                  </div>
                </form>
                <Card.Text>
                  <strong>
                    Total: Rs
                    {cartItems
                      .reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0)
                      .toFixed(2)}
                  </strong>
                </Card.Text>
                <Button variant="primary" className="w-100">
                  Proceed to Checkout
                </Button>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Missing Cart Items?</Card.Title>
                <Card.Text>
                  If you're unable to see items you've added previously, try these steps:
                  <ul>
                    <li>Sign in to your account</li>
                    <li>Clear your browser cache and cookies</li>
                    <li>Try using a different browser</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
