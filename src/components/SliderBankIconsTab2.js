import React from 'react';
import Slider from 'react-slick'
// import BCP from '../assets/images/bcp-logo.png';
import PropTypes from 'prop-types';

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

SliderBankIconsTab2.propTypes = {
  id: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  url: PropTypes.string.isRequired,
  info: PropTypes.array.isRequired
}

export default SliderBankIconsTab2;