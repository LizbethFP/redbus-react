import React from 'react';
import { Row } from 'react-bootstrap';
// import SectionOneContent from './SectionOneContent';

const SectionOne = () => (
  <div className="col-12">
    <Row className="show-grid">
      <div className="columnleft col-left rounded-left d-flex align-items-center">
        <div className="col text-center">
          <span className="font-size-small">Código de pago</span>
          <p className="font-weight-bold font-size-large">9162582</p>
        </div>
      </div>
      <div className="colmiddle d-flex align-items-center">
        <div className="col text-center">
          <span className="font-weight-bold color-darkslategray">Total</span>
          <p className="font-weight-bold color-darkslategray">s/. 140.00</p>
        </div>
      </div>
      <div className="columnright col-right d-flex align-items-center rounded-right">
        <div className="col text-center">
          <span className="font-size-small color-darkslategray">Tu orden expirará:</span>
          <p className="font-size-medium color-darkslategray">23 Feb. - 01:12 pm.</p>
        </div>
      </div>
    </Row>
  </div>
)

export default SectionOne;