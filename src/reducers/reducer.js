import BCP from '../assets/images/bcp-logo.png';
import BBVA from '../assets/images/bbva-logo.png';
import Interbank from '../assets/images/interbank-logo.png';
import Scotibank from '../assets/images/scotiabank-logo.png';
import Banbif from '../assets/images/banbif-logo.png';
import Fullcarga from '../assets/images/full-carga-logo.png';
import WesternUnion from '../assets/images/western-union-logo.png';
import Kasnet from '../assets/images/kasnet-logo.png';

const data = {
  tabs: ['Banca por internet', 'Pagar en efectivo'],
  seccion1: [
    { id: 0, subtitle: 'Código de pago', subtitleContent: '9125682' },
    { id: 1, subtitle: 'total', subtitleContent: 'S/.140.00' },
    { id: 3, subtitle: 'Tu orden expirará', subtitleContent: '23 Feb - 01:12 p.m.' }
  ],
  banksInternet: [
    { id: 'BCP', url: BCP, detail: 'Selecciona la opción Pago de servicios > EMPRESAS>PAGOEFECTIVO > SOLES.'}, 
    { id: 'BBVA', url: BBVA, detail: 'Selecciona la opción Pago de servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES.'}, 
    { id: 'Interbank', url: Interbank, detail: 'Selecciona la opción Pago a Instituciones o Empresa > Empresa: PAGOEFECTIVO > Servicio: PAGOEFECTIVO'}, 
    { id: 'Scotiabank', url: Scotibank, detail: 'Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES'}, 
    { id: 'Banbif', url: Banbif, detail: 'Selecciona la opción Pago de servicios > Busca por Empresa y escribe PAGOEFECTIVO > Selecciona la empresa PAGOEFECTIVO'}
  ],
  banksCash: [
    { id: 'BCP', url: BCP, info: 'Agentes y Bodegas Agencias', detail: ['Agentes BCP: Brinda el código de empresa 02186.', 'Agencias BCP: Costo adicional: S/.1.00.']},
    { id: 'BBVA', url: BBVA, info: 'Agentes y Bodegas Agencias', detail: [null]},
    { id: 'Interbank', url: Interbank, info: 'Agentes y Bodegas Agencias', detail: ['Agentes Interbank: Brinda el siguiente código 2735001', 'Agencias Market de Interbank: Costo adicional S/. 2.00.']},
    { id: 'Banbif', url: Banbif, info: 'Agencias', detail: [null]},
    { id: 'Fullcarga', url: Fullcarga, info: 'Agentes y Bodegas Agencias', detail: ['Encuentra a FullCarga en Bodegas, Farmacias, cabinas de Internet y Locutorios.']},
    { id: 'Scotiabank', url: Scotibank, info: 'Agencias', detail: [null]},
    { id: 'WesternUnion', url: WesternUnion, info: 'Agentes y Bodegas Agencias', detail: [null]},
    { id: 'Kasnet', url: Kasnet, info: 'Agentes', detail: [null]},
  ]
};

const INIT_STATE = {
  dataList: data,
  iconIsActive: false
};

// valor inicial 
export default (state = INIT_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};