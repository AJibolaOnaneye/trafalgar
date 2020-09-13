import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import section5_img1 from './pictures/section5_img1.png';
import section5_img2 from './pictures/section5_img2.png';
import section5_img3 from './pictures/section5_img3.png';
import ButtonWhite from './ButtonWhite';
import { Link } from 'react-router-dom'

const Section5 = () => {
    return (
        <div>
            <div className="section4_div1">
          <h3 className="section4_h3">Check out our latest article</h3>
          <hr className="section4_line" />
        </div>

            <Container className='section5_container' >
            <Row>
    <Col className='section1_col' xs={6} md={4}>
    <div class="card section5_card" >
  <img src={section5_img1} className="section5_img" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Disease detection, check 
up in the laboratory</h5>
    <p class="card-text">In this case, the role of the health laboratory is very important to do
a disease detection...</p>
<Link to='readmore1' className='section5_link'> Read more <i className="fas fa-arrow-right"></i> </Link>
  </div>
</div>
    </Col>
    <Col className='section1_col' xs={6} md={4}>
    <div class="card section5_card" >
  <img src={section5_img2} className="section5_img" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Herbal medicines that are 
safe for consumption</h5>
    <p class="card-text">Herbal medicine is very widely used at this time because of its very good for your health...</p>
    <Link to='readmore2' className='section5_link'> Read more <i className="fas fa-arrow-right"></i> </Link>
  </div>
</div>
    </Col>
    <Col className='section1_col' xs={6} md={4}>
    <div class="card section5_card" >
  <img src={section5_img3} className="section5_img" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Natural care for healthy 
facial skin</h5>
    <p class="card-text">A healthy lifestyle should start from now and also for your skin health.
There are some...</p>

<Link to='readmore3' className='section5_link'> Read more <i className="fas fa-arrow-right"></i> </Link>
  </div>
</div>
        

    </Col>
  </Row>
        </Container>
        <div className='section5_button' > <ButtonWhite name='view all' /> </div>
        
        </div>
    )
}

export default Section5
