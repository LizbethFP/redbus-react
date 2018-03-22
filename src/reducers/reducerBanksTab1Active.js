import BCP from '../assets/images/bcp-logo.png';

export default function (state = { id: 'BCP', link: {BCP}, detail: 'Selecciona la opción Pago de servicios > EMPRESAS > PAGOEFECTIVO > SOLES'}, action) {

  switch (action.type) {
    case 'BANK_SELECTED':
      return action.payload;
  }
  return state;
}