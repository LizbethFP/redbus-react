import React from 'react';
import { Row } from 'react-bootstrap';
// import SliderArrowTab1 from './SliderArrowTab1';
import SliderBankIcons from './SliderBankIcons'

const SliderTab1 = ({ dataSliderInternet }) => (
  <Row className="show-grid">
    <div className="col-12">
      <Row className="show-grid">
        {/*<SliderArrowTab1 />*/}
        <SliderBankIcons dataIconBanks={dataSliderInternet }/>       
      </Row>
    </div>
  </Row>
)

export default SliderTab1;