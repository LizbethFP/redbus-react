import React from 'react';
import Row from './Row';
import Text from './Text';
import Icon from './Icon';

const PrintComponent = () => (
  <div className="col-12 col-md-4 d-flex justify-content-center">
    <Row>
      <div className="col-12">
        <Row>
          <div className="col-6">
            <Text />
          </div>
          <figure className="col-6">
            <a href="">
              <Icon />
            </a>
          </figure>
        </Row>
      </div>
    </Row>
  </div>
)

export default PrintComponent;