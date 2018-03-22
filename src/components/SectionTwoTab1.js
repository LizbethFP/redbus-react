import React from 'react';
import TextParagraph1 from './TextParagraph1';
import TextParagraph2 from './TextParagraph2';
import SliderTab1 from './SliderTab1';

const SectionTwoTab1 = (datacopy) => (
  <section className="col-12 mt-2">
    <TextParagraph1 paragraph= "Selecciona dónde quieres pagar"/>
    <SliderTab1 dataSliderInternet={datacopy }/>
    <TextParagraph2 paragraph2="Puedes pagar desde la Web o App móvil del Banco"/>
  </section>
)

export default SectionTwoTab1;