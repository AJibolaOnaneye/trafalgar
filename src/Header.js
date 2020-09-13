import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonBlue from "./ButtonBlue";
import header_img from "./pictures/header_img.png";

const Header = () => {
  return (
    <div>
      <Container className='ly' >
        <Row>
          <Col className='space1' xs={12} md={6} lg={6}>
            <h1 className='header_h1'>
              Virtual healthcare for <br /> you
            </h1>
            <p className='header_p'>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <ButtonBlue link="/Consult" name="Consult today" />
          </Col>

          <Col xs={6} md={6} lg={6}>
            <img src={header_img} />
          </Col>
        </Row>
      </Container>

    

    </div>
  );
};

export default Header;
