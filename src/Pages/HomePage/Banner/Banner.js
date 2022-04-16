import React, { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import './Banner.css';
import car_1 from '../../../Images/car_1.jpg';
import car_2 from '../../../Images/car_2.jpg';
import car_3 from '../../../Images/car_3.jpg';

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* <Carousel> */}
        <Carousel.Item>
          <Image
            className="d-block w-100 customImage"
            src={car_1}
            alt="First slide"
            fluid
          />
          <Carousel.Caption className="textColor">
            <h3>First slide label</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              necessitatibus voluptate, a dicta suscipit explicabo accusantium
              nam omnis ipsum eaque voluptatum sunt neque consectetur amet sit,
              ratione iusto perferendis eligendi eum! Aliquid numquam molestiae
              labore! Enim sit dolor pariatur error dolore modi libero
              accusantium itaque!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 customImage"
            src={car_2}
            alt="Second slide"
            fluid
          />

          <Carousel.Caption className="textColor">
            <h3>Second slide label</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              sapiente perferendis beatae nulla sunt, nobis porro voluptatibus
              illum reiciendis voluptas possimus nam repudiandae quasi quia quod
              tenetur suscipit sint eveniet repellendus? Voluptas atque placeat
              dolore in, molestiae harum beatae est.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 customImage"
            src={car_3}
            alt="Third slide"
            fluid
          />

          <Carousel.Caption className="textColor">
            <h3>Third slide label</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              omnis accusamus nisi quam corporis numquam. Dolorem a omnis unde
              tempore voluptate. Minima veniam illo debitis sed laborum sit id
              qui facere, corporis assumenda? Est aliquid eaque, excepturi
              temporibus ut officia. Mollitia delectus molestias atque libero
              laboriosam unde alias eius porro.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
