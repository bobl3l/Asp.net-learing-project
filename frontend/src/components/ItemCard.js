import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const ItemCard = ({ item, onClick, addToCart }) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(item);
  };

  return (
    <Card
      className="h-100 position-relative cursor-pointer"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <Card.Img
        variant="top"
        src={item.image}
        style={{
          height: "200px",
          objectFit: "contain",
          padding: "10px",
        }}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>${item.price.toFixed(2)}</Card.Text>
      </Card.Body>
      <Button
        variant="primary"
        className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
        style={{
          width: "35px",
          height: "35px",
          bottom: "10px",
          right: "10px",
          padding: 0,
        }}
        onClick={handleAddToCart}
      >
        <FaPlus />
      </Button>
    </Card>
  );
};

export default ItemCard;
