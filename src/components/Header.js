import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import Logo from './Logo';
import Row from './Row';

const Header = () => (
  <header className="container-fluid">
    <Row>
      <div className="icon-header m-3">
        <Logo />
      </div>
    </Row>
  </header>
)

export default Header;

