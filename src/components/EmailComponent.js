import React from 'react';
import Row from './Row';
import Text from './Text';
import Email from './Email';

const EmailComponent = () => (
  <div className="col-6 col-md-4 d-flex justify-content-center">
    <Row>
      <div className="col-6">
        <Text />
      </div>
      <div className="col-6">
        <Email />
      </div>
    </Row>
  </div>
)

export default EmailComponent;