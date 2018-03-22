import React from 'react';
import NumberOne from '../assets/images/number-one-in-a-circle.png';
import NumberTwo from '../assets/images/number-two-in-a-circle.png';

const TextParagraphDetail = ({ bankInternetDetail}) => (
  <ul className="detail-list">
    <li className="mb-1"><span className="mr-2"><img src={NumberOne} alt="number one" className="number-icon" /></span>Selecciona la opción Pago de servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES.</li>
    <li><span className="mr-2"><img src={NumberTwo} alt="number two" className="number-icon"/></span>Enter your CIP code: 9125682 and follow the
instructions.</li>
  </ul>
)
export default TextParagraphDetail;