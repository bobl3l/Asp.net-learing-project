import React, { useState, useEffect, useRef } from "react";
import { Carousel, Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axiosInstance from "../utils/axiosConfig";

const HomePage = ({ addToCart }) => {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const bestSellersRef = useRef(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await axiosInstance.get("/Items/BestSellers");
        setBestSellers(response.data);
      } catch (error) {
        console.error("Error fetching best sellers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  const scrollLeft = () => {
    if (bestSellersRef.current) {
      bestSellersRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (bestSellersRef.current) {
      bestSellersRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  // Sample data for carousel
  const promoImages = [
    {
      id: 1,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/96b8ae190696671.65bf5f3b1a70d.jpg",
      alt: "Summer Sale",
    },
    {
      id: 2,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bd94e190696671.65bf5f3b1f264.jpg",
      alt: "New Arrivals",
    },
    {
      id: 3,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/147f39190696671.65bf5f3b1d840.jpg",
      alt: "Special Offers",
    },
  ];

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col lg={10} xl={11}>
          <section className="mb-5">
            <h2 className="mb-3 text-center">Special Offers</h2>
            <Carousel className="shadow-sm rounded">
              {promoImages.map((image) => (
                <Carousel.Item key={image.id}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.alt}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </section>

          <section className="position-relative mb-5">
            <h2 className="mb-3 text-center">Best Sellers</h2>
            {loading ? (
              <p className="text-center">Loading best sellers...</p>
            ) : (
              <Row className="align-items-center">
                <Col xs={1} className="p-0 text-center">
                  <Button
                    variant="light"
                    className="rounded-circle shadow-sm"
                    style={{ width: "40px", height: "40px", padding: "0" }}
                    onClick={scrollLeft}
                  >
                    <FaChevronLeft />
                  </Button>
                </Col>

                <Col xs={10} className="px-0">
                  <div
                    ref={bestSellersRef}
                    className="d-flex overflow-hidden"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {bestSellers.map((item) => (
                      <Card
                        key={item.id}
                        className="me-3 shadow-sm flex-shrink-0"
                        style={{ width: "240px" }}
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
                        <Card.Body className="d-flex flex-column">
                          <center>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text className="text-danger">
                              ${item.price.toFixed(2)}
                            </Card.Text>
                          </center>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Col>

                <Col xs={1} className="p-0 text-center">
                  <Button
                    variant="light"
                    className="rounded-circle shadow-sm"
                    style={{ width: "40px", height: "40px", padding: "0" }}
                    onClick={scrollRight}
                  >
                    <FaChevronRight />
                  </Button>
                </Col>
              </Row>
            )}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
