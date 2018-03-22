import React from 'react';
import { Row } from 'react-bootstrap';
import SectionOne from './SectionOne';
import SectionTwoTab2 from './SectionTwoTab2';
import SectionFor from './SectionFor';


const Tab2 = ({bankCash}) => (
  <div className="container mt-4 rounded">
    <Row className="show-grid">
      <SectionOne />
    </Row>
    <Row className="show-grid">
      <SectionTwoTab2 slidercash={bankCash}/>
    </Row>
    <Row className="show-grid">
      <SectionFor />
    </Row>
  </div>
)

export default Tab2;

//vhjxkhvjxhcvjh