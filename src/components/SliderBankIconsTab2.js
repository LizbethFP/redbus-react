import React from 'react';
import Slider from 'react-slick'
// import BCP from '../assets/images/bcp-logo.png';

const SliderBankIconsTab2 = ({ dataIconCash }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Slider {...settings} className="col">
            {dataIconCash.banksCash.map(elemt => (
              <figure className="col" key={elemt.id} {...elemt}>
                <img src={elemt.url} alt={elemt.id} className="p-1 img-fluid bank-logo-size d-block ml-bank" />
                <figcaption className="text-center">{elemt.info}</figcaption>
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default SliderBankIconsTab2;