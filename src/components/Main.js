import React from 'react';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import '../css/main.css';
// import PropTypes from 'prop-types';

const Main = ({data}) => {
  return (
    <main className="container font-roboto">
      <Row className="show-grid">
        <Nav data = {data}/>
      </Row>
    </main>
  )
}

// Main.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
// }

export default Main;