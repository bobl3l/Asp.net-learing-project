import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ItemCard from "./ItemCard";
import ItemModal from "./ItemModal";
import axiosInstance from "../utils/axiosConfig";

const ItemsPage = ({ addToCart }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axiosInstance.get("/Items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) {
    return <div>Loading items...</div>;
  }

  return (
    <div>
      <h2 className="mb-4">All Products</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <ItemCard
              item={item}
              onClick={() => handleItemClick(item)}
              addToCart={addToCart}
            />
          </Col>
        ))}
      </Row>

      <ItemModal
        show={showModal}
        item={selectedItem}
        handleClose={handleCloseModal}
        addToCart={addToCart}
      />
    </div>
  );
};

export default ItemsPage;
