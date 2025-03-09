import React from "react";
import { Modal, Button } from "react-bootstrap";

const ItemModal = ({ show, item, handleClose, addToCart }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{item?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-3">
          <img
            src={item?.image}
            alt={item?.name}
            className="img-fluid"
            style={{ maxHeight: "200px" }}
          />
        </div>
        <h5>${item?.price?.toFixed(2)}</h5>
        <p>{item?.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            addToCart(item);
            handleClose();
          }}
        >
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;
