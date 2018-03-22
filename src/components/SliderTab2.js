import React from 'react';
import {Row} from 'react-bootstrap';
import SliderArrowTab2 from './SliderArrowTab2';
import SliderBankIconsTab2 from './SliderBankIconsTab2';

const Slider = ({ iconSliderCash }) => (
  <Row className="show-grid">
      <Row className="show-grid">
        {/* <SliderArrowTab2 /> */}
        <SliderBankIconsTab2 dataIconCash = { iconSliderCash }/>
      </Row>
  </Row>
)

export default Slider;