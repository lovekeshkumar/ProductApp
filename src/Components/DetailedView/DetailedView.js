import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProductDetailPage = (props) =>{
  const { name, price, color, size } = props.product;

  return (
    <Container>
      <Row>
        <Col>
          <h2>{name}</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <img src={props.product.image} alt={name} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h3>Price: {price}</h3>
          <h4>Color: {color}</h4>
          <h4>Size: {size}</h4>
          <Button variant="primary" className="mr-3">Buy Now</Button>
          <Button variant="secondary">Add to Cart</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Recently Viewed</h3>
          {/* Render recently viewed products here */}
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Similar Products</h3>
          {/* Render similar products here */}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetailPage;
