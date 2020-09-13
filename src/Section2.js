import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import section2_img from './pictures/section2_img.png';
import ButtonWhite from './ButtonWhite'

const Section2 = () => {
    return (
        <div className='section2'>
            <Container>
  <Row>
    <Col className='section2_col1' xs={12} md={8}>
      <img src={section2_img} alt='' className='section2_img' />
    </Col>
    <Col className='section2_col2' xs={6} md={4}>
      <h3>Leading healthcare providers</h3>
      <hr className='section3_line' />
      <p className='section2_p'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
in the solutions we deliver</p>

<ButtonWhite link='learnmoreservice2' name='Learn more' />
    </Col>
  </Row>
  </Container>
        </div>
    )
}

export default Section2
