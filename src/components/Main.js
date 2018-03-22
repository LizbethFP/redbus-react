import React from 'react';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import '../css/main.css';

const Main = ({data}) => {
  return (
    <main className="container font-roboto">
      <Row className="show-grid">
        <Nav data = {data}/>
      </Row>
    </main>
  )
}
export default Main;