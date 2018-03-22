import BCP from '../assets/images/bcp-logo.png';
import BBVA from '../assets/images/bbva-logo.png';
import Interbank from '../assets/images/interbank-logo.png';
import Scotibank from '../assets/images/scotiabank-logo.png';
import Banbif from '../assets/images/banbif-logo.png';


export default function() {
  return [
    { id: 'BCP', url: BCP, detail: 'Selecciona la opción Pago de servicios > EMPRESAS>PAGOEFECTIVO > SOLES.' },
    { id: 'BBVA', url: BBVA, detail: 'Selecciona la opción Pago de servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES.' },
    { id: 'Interbank', url: Interbank, detail: 'Selecciona la opción Pago a Instituciones o Empresa > Empresa: PAGOEFECTIVO > Servicio: PAGOEFECTIVO' },
    { id: 'Scotiabank', url: Scotibank, detail: 'Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES' },
    { id: 'Banbif', url: Banbif, detail: 'Selecciona la opción Pago de servicios > Busca por Empresa y escribe PAGOEFECTIVO > Selecciona la empresa PAGOEFECTIVO' }
  ] 
};