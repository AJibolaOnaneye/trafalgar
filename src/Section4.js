import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import section4_img from './pictures/section4_img.png';
import NextButton from './NextButton'
import PrevButton from './PrevButton'

const Section4 = () => {
    return (
        <div>
             <div class=" section4_card " >

             <div classNmae='section4_div1'>
             <h3 className='section4_h3' >What our customer are saying</h3>
        <hr className='section4_line' />
             </div>
        
    
  <div id="carousel_1" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li className='indicator active' data-target="#carousel_1" data-slide-to="0" ></li>
    <li className='indicator' data-target="#carousel_1" data-slide-to="1"></li>
    <li className='indicator' data-target="#carousel_1" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <Container>
        <Row>
                <Col md={3} lg={3}><img src={section4_img} className='section4_img' alt='...' /></Col>
            
               
                <Col className='section4_col2' md={3} lg={3}><h5>Edward Newgate</h5>
                <p>Founder Circle</p>
                
            </Col>
            <Col md={6}><p className='section4_p'>“Our dedicated patient engagement app and <br />
web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br/>
or administrative hassle) and securely”</p></Col>
        </Row>
    </Container>
      
    </div>

    <div class="carousel-item">
      
    <Container>
        <Row>
                <Col md={3} lg={3}><img src={section4_img} className='section4_img' alt='...' /></Col>
            
               
                <Col className='section4_col2' md={3} lg={3}><h5>Edward Newgate</h5>
                <p>Founder Circle</p>
                
            </Col>
            <Col md={6}><p className='section4_p'>“Our dedicated patient engagement app and <br />
web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br/>
or administrative hassle) and securely”</p></Col>
        </Row>
    </Container>

    </div>
    
    <div class="carousel-item">

    <Container>
        <Row>
                <Col md={3} lg={3}><img src={section4_img} className='section4_img' alt='...' /></Col>
            
               
                <Col className='section4_col2' md={3} lg={3}><h5>Edward Newgate</h5>
                <p>Founder Circle</p>
                
            </Col>
            <Col md={6}><p className='section4_p'>“Our dedicated patient engagement app and <br />
web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br/>
or administrative hassle) and securely”</p></Col>
        </Row>
    </Container>
      
    </div>
  </div>


  <PrevButton prev='prev' />
    <NextButton next='next' />
    
</div>

  
  </div>




            
        </div>
    )
}

export default Section4
