import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "https://via.placeholder.com/300x300",
      price: 200,
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://via.placeholder.com/300x300",
      price: 255,
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://via.placeholder.com/300x300",
      price: 350,
    },
    {
      id: 4,
      name: "Product 4",
      image: "https://via.placeholder.com/300x300",
      price: 390,
    },
    {
      id: 5,
      name: "Product 5",
      image: "https://via.placeholder.com/300x300",
      price: 400,
    },
    {
      id: 6,
      name: "Product 6",
      image: "https://via.placeholder.com/300x300",
      price: 500,
    },
  ];

  return (
    <Container className="home-container">
      <Row className="my-5">
        <Col>
          <h2>Winter Collection</h2>
          <Row className="mb-4">
            <Col>
              <Carousel className="d-flex-row-md-6"
                prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
                nextIcon={<FontAwesomeIcon icon={faChevronRight} />}
              >
                <Carousel.Item>
                  <img src="https://via.placeholder.com/300x300" alt="First slide" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="https://via.placeholder.com/300x300" alt="Second slide" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="https://via.placeholder.com/300x300" alt="Third slide" className="d-block w-100" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h2>T-Shirts</h2>
          <Row>
            {products.map((product) => (
              <Col key={product.id} md={4}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{`Rs. ${product.price}`}</Card.Text>
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faHeart} /> Add to favorites
                    </Button>
                    <Button variant="success">
                      <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h2>Sweatshirts</h2>
          <Row>
            {products.map((product) => (
              <Col key={product.id} md={4}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{`Rs. ${product.price}`}</Card.Text>
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faHeart} /> Add to favorites
                    </Button>{" "}
                    <Button variant="success">
                      <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h2>Deals</h2>
          <Row>
            {products.map((product) => (
              <Col key={product.id} md={3}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{`$${product.price}`}</Card.Text>
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faHeart} /> Add to favorites
                    </Button>{" "}
                    <Button variant="success">
                      <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
