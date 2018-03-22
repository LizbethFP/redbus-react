import React from 'react';
import TextParagraphColor  from './TextParagraphColor';
import TextParagraphDetails  from './TextParagraphDetails';

const SectionThree = ({ bankInternetDetail}) => (
  <section className="col-12">
    <TextParagraphColor />
    <TextParagraphDetails bankInternetDetail={bankInternetDetail} />
  </section>
)

export default SectionThree;