import React from 'react';
// import BankItem from './BankItem';
import Slider from 'react-slick';
// import BCP from '../assets/images/bcp-logo.png';
import PropTypes from 'prop-types';

const SliderBankIcons = ({ dataIconBanks}) => {
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
            {dataIconBanks.datacopy.banksInternet.map(ele => (
              <figure className="col" key={ele.id} {...ele}>
                <img src={ele.url} alt={ele.id} className="p-1 img-fluid bank-logo-size" />
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

SliderBankIcons.propTypes = {
  id: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  url: PropTypes.string.isRequired
}

export default SliderBankIcons

