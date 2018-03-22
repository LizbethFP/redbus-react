import React from 'react';

const BankItem = ({id, url}) => (
  <figure className="m-1">
    <img src={url} alt={id} className="p-1 img-fluid bank-logo-size"></img>
    <figcaption className="text-center">{id}</figcaption>
  </figure>
)

export default BankItem;