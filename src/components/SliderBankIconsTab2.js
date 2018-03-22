import React from 'react';

import Slider from 'react-slick'
// import BCP from '../assets/images/bcp-logo.png';

const SliderBankIconsTab2 = ({ dataIconCash }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Slider {...settings} className="col">
            {dataIconCash.banksCash.map(elemt => (
              <div className="col" key={elemt.id} {...elemt}>
                <img src={elemt.url} alt={elemt.id} className="p-1 img-fluid bank-logo-size" />
                {/* <span className="text-center">{elemt.info}</span> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default SliderBankIconsTab2;