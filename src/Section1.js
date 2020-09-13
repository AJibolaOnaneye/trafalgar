import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import search from './pictures/search.png';
import drug from './pictures/drug.png';
import form from './pictures/form.png'
import section1_img from './pictures/section1_img.png';
import ButtonWhite from './ButtonWhite';

const Section1 = () => {
    return (
        <div>
            <h2 className='section1_h2'>Our services</h2>
            {/* <hr className='section1_line' /> */}
            <hr className='section1_line' />
            <p className='section1_p'>
            We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment <br />
            &nbsp; &nbsp;&nbsp;&nbsp; with our highly qualified doctors you can consult with us which type of service is suitable for your health
            </p>
        <img src={section1_img} className='section1_img' alt="..." />
            <Container className='section1_container' >
            <Row>
    <Col className='section1_col' xs={6} md={4}>
    <div class="card section_card" >
  <img src={search} className="search" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Search doctor</h5>
    <p class="card-text">Choose your doctor from thousands <br/> of specialist, general, and trusted hospitals</p>
  </div>
</div>
    </Col>
    <Col className='section1_col' xs={6} md={4}>
    <div class="card section_card" >
  <img src={drug} className="drug" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Online pharmacy</h5>
    <p class="card-text">Buy  your medicines with our <br/> mobile application with a simple delivery system</p>
  </div>
</div>
    </Col>
    <Col className='section1_col' xs={6} md={4}>
    <div class="card section_card" >
  <img src={form} className="form" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Consultation</h5>
    <p class="card-text">Free consultation with our trusted doctors and get the best recomendations</p>
  </div>
</div>
    </Col>
  </Row>

  <Row>
    <Col className='section1_col' xs={6} md={4}>
    <div class="card section_card" >
  <img src={form} className="form" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Consultation</h5>
    <p class="card-text">Free consultation with our trusted doctors and get the best recomendations</p>
  </div>
</div>
    </Col>
    <Col className='section1_col' xs={6} md={4}>
    <div class="card section_card" >
  <img src={form} className="form" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Consultation</h5>
    <p class="card-text">Free consultation with our trusted doctors and get the best recomendations</p>
  </div>
</div>
    </Col>
    <Col className='section1_col' xs={6} md={4}>
    <div class="card section_card" >
  <img src={form} className="form" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Consultation</h5>
    <p class="card-text">Free consultation with our trusted doctors and get the best recomendations</p>
  </div>
</div>
    </Col>
  </Row>
            </Container>
        <div className='section1_button'>
      <ButtonWhite link='/learnmoreservices' name='Learn more' />
      </div>
        </div>
    )
}

export default Section1
