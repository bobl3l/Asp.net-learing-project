import React from "react";
import {
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2 className="mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <h4>Your cart is empty</h4>
          <Button variant="primary" href="/items" className="mt-3">
            Continue Shopping
          </Button>
        </div>
      ) : (
        <Row>
          <Col md={8}>
            <Card className="mb-4 shadow-sm bg-dark">
              <Card.Header className="bg-dark text-light">
                <Row className="fw-bold d-none d-md-flex">
                  <Col md={2}>Image</Col>
                  <Col md={4}>Product</Col>
                  <Col md={4}>Quantity</Col>
                  <Col md={2} className="text-end">
                    Total
                  </Col>
                </Row>
              </Card.Header>
              <ListGroup variant="flush">
                {cart.map((item) => (
                  <ListGroup.Item key={item.id} className="py-3">
                    <Row className="align-items-center">
                      <Col xs={3} md={2}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded"
                          style={{
                            height: "80px",
                            width: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </Col>
                      <Col xs={9} md={4}>
                        <h5>{item.name}</h5>
                        <p className="mb-0 text-muted">
                          ${item.price.toFixed(2)}
                        </p>
                      </Col>
                      <Col xs={6} md={4} className="mt-2 mt-md-0">
                        <InputGroup size="sm">
                          <Button
                            variant="outline-secondary"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <Form.Control
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                parseInt(e.target.value) || 0
                              )
                            }
                            style={{ textAlign: "center" }}
                          />
                          <Button
                            variant="outline-secondary"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </Button>
                        </InputGroup>
                      </Col>
                      <Col xs={6} md={2} className="text-end">
                        <p className="mb-0">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <Button
                          variant="link"
                          className="text-danger p-0 mt-1"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FaTrash />
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="bg-dark text-light">
              <Card.Header as="h5" className="bg-dark">
                Order Summary
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Subtotal:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between fw-bold">
                    <span>Total:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="success" className="w-100 mt-3">
                  Checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CartPage;
