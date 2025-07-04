import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../assests/logo.png'
import carouselimage from '../assests/carousel-image.jpg'

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
        <img src={carouselimage}
        alt="no image"
        style={{height:'400px',width:'100%',padding:"50px",borderRadius:"10px"}}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img 
        src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1751370762290_goodwill.jpg"
         alt="no image"
                 style={{height:'400px',width:'100%',padding:"50px",borderRadius:"10px"}}
         />
      </Carousel.Item>


      <Carousel.Item>
        <img 
        src={logo}
         alt="no image"
                 style={{height:'400px',width:'100%',padding:"50px",borderRadius:"10px"}}
         />
      </Carousel.Item>
    </Carousel>
    
    </>
  )
}

export default Homecaro1