import React from 'react';
import Row from './Row';
import PrintComponent from './PrintComponent';
import EmailComponent from './EmailComponent';
import PayLogoComponent from './PayLogoComponent';

const FooterCol1 = () => (
  <div className="my-4">
    <Row>
      <PrintComponent/>
      <EmailComponent/>
      <PayLogoComponent/>
    </Row>
  </div>
)

export default FooterCol1;