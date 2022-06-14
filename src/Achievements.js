import React from "react";
import {Carousel} from 'react-bootstrap'
import NssCamp from './Photos/NSS camp.jpg';
import CampFire from './Photos/camp fire.jpg';
import ChennaiFlood from './Photos/Chennai Flood.jpg';
import Protest from './Photos/Jali Kattu Protest.jpg';
function Achievements() {
  return (
    <>
      <div className="mainheading d-flex align-items-center">
        <b>Social Activities</b>
       
      </div>
   <div className='container-fluid highlights in-left' id='workexp'>
 
   
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={NssCamp}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>NSS Camp</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={CampFire}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>NSS CampFire</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ChennaiFlood}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Protest}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Protest</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
     </div>   
      
    </>
  );
}

export default Achievements;
