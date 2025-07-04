import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../assests/logo.png'

function Homecaro1() {
      const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    
    <>
<Carousel 
activeIndex={index} 
onSelect={handleSelect} 

>
      <Carousel.Item>
        <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1744877848242_revplaycard1240x300.jpg" 
        alt="no image"
        style={{width:'100%',padding:"50px",borderRadius:"10px"}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1751370762290_goodwill.jpg"
         alt="no image"
                 style={{width:'100%',padding:"50px",borderRadius:"10px"}}
         />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          <Carousel.Item>
        <img src={logo.png}
        alt="no image"
        style={{width:'100%',padding:"50px",borderRadius:"10px"}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </>
  )
}

export default Homecaro1