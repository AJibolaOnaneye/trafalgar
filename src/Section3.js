import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import section3_img from './pictures/section3_img.png';
import ButtonWhite from './ButtonWhite'

const Section3 = () => {
    return (
        <div>

  <Container >
        <Row>
          <Col  xs={12} md={6} lg={6} className='section3_col1'>
          <h3>Download our<br/> mobile apps</h3>
      <hr className='section3_line' />
      <p className='section2_p'>Our dedicated patient engagement app and <br/>
web portal allow you to access information <br/> instantaneously (no tedeous form, long calls,<br/>
or administrative hassle) and securely</p>

            <ButtonWhite link='learnmoreservice2' name='Learn more' />
          </Col>

          <Col xs={12} md={6} lg={6} className='section3_col2'>
            <img src={section3_img} className='section3_img' />
          </Col>
        </Row>
      </Container>



        </div>
    )
}

export default Section3
