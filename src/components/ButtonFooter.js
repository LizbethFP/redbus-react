import React from 'react';
import PropTypes from 'prop-types';
import ArrowCircle from '../assets/images/right-arrow-inside-a-circle.png';
import Row from './Row';

const ButtonFooter = () => (
  <Row>
    <div className="col-12 d-flex justify-content-center">
      <a href="https://ubicanos.pagoefectivo.pe/#/?tienda=[idServicio]&moneda=1&monto=100.00&ubicame=true&_k=9nbufb" className="rounded btn-footer red-btn btn-link text-center">
        <span className="mr-4 text-center"><img src={ArrowCircle} alt="arrow circle" className="img-fluid white-arrow-btn"/></span>
        Encuentra tu punto de pago
      </a>
    </div>
  </Row> 
)

export default ButtonFooter;

ButtonFooter.propTypes = {
  ArrowCircle: PropTypes.string
}