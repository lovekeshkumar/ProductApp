import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row xs={1} md={2}>
          <Col>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              rhoncus justo eget quam malesuada convallis. Ut bibendum nisi
              vitae odio finibus, vel convallis ex suscipit.
            </p>
          </Col>
          <Col>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/fashion">Fashion</a>
              </li>
              <li>
                <a href="/advice">Advice</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Connect with Us</h5>
            <ul className="social-icons list-unstyled mb-3">
              <li>
                <a href="#">{/* <FontAwesomeIcon icon={faFacebook} /> */}</a>
              </li>
              <li>
                <a href="#">{/* <FontAwesomeIcon icon={faTwitter} /> */}</a>
              </li>
              <li>
                <a href="#">{/* <FontAwesomeIcon icon={faInstagram} /> */}</a>
              </li>
            </ul>
            <ul className="payment-icons list-unstyled">
              <li>
                <FontAwesomeIcon icon={faCreditCard} />
              </li>
              <li>
                <FontAwesomeIcon icon={faCreditCard} />
              </li>
              <li>
                <FontAwesomeIcon icon={faCreditCard} />
              </li>
              <li>
                <FontAwesomeIcon icon={faCreditCard} />
              </li>
              <li>
                <FontAwesomeIcon icon={faCreditCard} />
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-center">
              &copy; 2023 Your Website Name. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
