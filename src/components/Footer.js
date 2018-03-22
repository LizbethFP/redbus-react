/* código */
// import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';

import React from 'react';
import ButtonFooter from './ButtonFooter';
import '../css/Footer.css';
import FooterContent from './FooterContent';


const Footer = () => (
  <footer className="w-100 container-fluid">
    <ButtonFooter />
    <FooterContent />
  </footer>
)

export default Footer;