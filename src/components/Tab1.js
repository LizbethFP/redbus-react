import React from 'react';
import { Row } from 'react-bootstrap';
import SectionOne from './SectionOne';
import SectionTwoTab1 from './SectionTwoTab1';
import SectionThree from './SectionThree';


const Tab1 = ({ bankInternet }) => (
  <div className="container mt-4 rounded">
    <Row className="show-grid">
      <SectionOne squareinfo={bankInternet}/>
    </Row>
    <Row className="show-grid">
      <SectionTwoTab1 datacopy ={bankInternet}/>
    </Row>
    <Row className="show-grid">
      <SectionThree bankInternetDetail={bankInternet}/>
    </Row>
  </div>
)

export default Tab1;