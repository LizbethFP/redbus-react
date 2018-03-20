import React from 'react';
import logo from '../assets/images/pagoefectivo.png'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logo = () => (
  <img src={logo} alt="Pago Efectivo" className="img-fluid logo-footer" />
)

export default Logo;

Logo.propTypes = {
  logo: PropTypes.string
}