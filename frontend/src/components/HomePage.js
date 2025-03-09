import React, { useState, useEffect } from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = ({ addToCart }) => {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await fetch(
          "https://localhost:7000/api/Items/BestSellers"
        );
        if (response.ok) {
          const data = await response.json();
          setBestSellers(data);
        } else {
          console.error("Failed to fetch best sellers");
        }
      } catch (error) {
        console.error("Error fetching best sellers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  // Sample data for carousel
  const promoImages = [
    {
      id: 1,
      src: "https://via.placeholder.com/1200x400?text=Summer+Sale",
      alt: "Summer Sale",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/1200x400?text=New+Arrivals",
      alt: "New Arrivals",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/1200x400?text=Special+Offers",
      alt: "Special Offers",
    },
  ];

  return (
    <div>
      <section className="mb-5">
        <h2 className="mb-3">Special Offers</h2>
        <Carousel>
          {promoImages.map((image) => (
            <Carousel.Item key={image.id}>
              <img className="d-block w-100" src={image.src} alt={image.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section>
        <h2 className="mb-3">Best Sellers</h2>
        {loading ? (
          <p>Loading best sellers...</p>
        ) : (
          <div className="d-flex overflow-auto pb-3">
            {bestSellers.map((item) => (
              <Card
                key={item.id}
                className="me-3"
                style={{ minWidth: "200px" }}
              >
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Link to="/items" className="btn btn-outline-primary btn-sm">
                    View more
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
