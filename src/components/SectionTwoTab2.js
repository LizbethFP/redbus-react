import React from 'react';
import TextParagraph1 from './TextParagraph1';
import TextParagraph3 from './TextParagraph3';
// import TextParagraphDisplayNoneDesktop from './TextParagraphDisplayNoneDesktop';
import SliderTab2 from './SliderTab2';

const SectionTwoTab2 = ({ slidercash }) => (
  <section className="col-12 mt-2">
    <TextParagraph1 paragraph="Selecciona dónde quieres pagar" />
    <SliderTab2 iconSliderCash={slidercash} />
    <TextParagraph3 paragraph3="Puedes pagar desde la Web o App móvil del Banco" />
  </section>
)

export default SectionTwoTab2;