import React from 'react';
import TextParagraphColor from './TextParagraphColor';
import TextParagraph4 from './TextParagraph4';
import Span from './Span';
import PropTypes from 'prop-types';

const TextParagraphDetailEfectivo = ({detail}) => (
  <div>
    <TextParagraphColor />
    <TextParagraph4 paragraph4="Indica que vas a realizar un pago a la empresa
PAGOEFECTIVO. Indica el Código CIP: 9125682 y el
importe a pagar en Soles."/>
    <Span detail={detail}/>
  </div>
)

TextParagraphDetailEfectivo.propTypes = {
  detail: PropTypes.array.isRequired
}

export default TextParagraphDetailEfectivo;