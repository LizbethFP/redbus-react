import React from 'react';
import Text from './Text';
import Logo from './Logo';

const PayLogoComponent = () => (
  <div className="col-6 col-md-4 d-flex justify-content-center">
    <div className="col-6">
      <Text />
    </div>
    <div className="col-6">
      <Logo />
    </div>
  </div>
)

export default PayLogoComponent;
