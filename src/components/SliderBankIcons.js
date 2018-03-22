import React from 'react';
// import { Col } from 'react-bootstrap';
// import BankItem from './BankItem';
import Slider from 'react-slick';
// import BCP from '../assets/images/bcp-logo.png';

const SliderBankIcons = ({ dataIconBanks}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div className="col-10">
      <div className="row d-flex flex-wrap">
        {dataIconBanks.datacopy.banksInternet.map(el => (
          <Slider key={el.id}
            {...el}  {...settings}>
            <div className="m-1">
              <img src={el.url} alt={el.id} className="p-1 img-fluid bank-logo-size"></img>
              <figcaption className="text-center">{el.id}</figcaption>
            </div>
          </Slider>
        ))}
      </div>
    </div>
  )
}

export default SliderBankIcons

