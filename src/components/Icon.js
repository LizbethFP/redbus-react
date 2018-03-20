import React from 'react';
import PropTypes from 'prop-types';
import Printer from '../assets/images/printer.png';

const Icon = () => (
  <img src={Printer} alt="printing machine" className="img-fluid yellow-print-icon"/>
)

export default Icon;

Icon.propTypes = {
  Printer: PropTypes.string
}