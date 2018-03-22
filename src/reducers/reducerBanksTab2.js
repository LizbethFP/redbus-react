import BCP from '../assets/images/bcp-logo.png';
import BBVA from '../assets/images/bbva-logo.png';
import Interbank from '../assets/images/interbank-logo.png';
import Scotibank from '../assets/images/scotiabank-logo.png';
import Banbif from '../assets/images/banbif-logo.png';
import Fullcarga from '../assets/images/full-carga-logo.png';
import WesternUnion from '../assets/images/western-union-logo.png';
import Kasnet from '../assets/images/kasnet-logo.png';

export default function () {
  return [
    { id: 'BCP', url: BCP, info: 'Agentes y Bodegas Agencias', detail: ['Agentes BCP: Brinda el código de empresa 02186.', 'Agencias BCP: Costo adicional: S/.1.00.'] },
    { id: 'BBVA', url: BBVA, info: 'Agentes y Bodegas Agencias', detail: [null] },
    { id: 'Interbank', url: Interbank, info: 'Agentes y Bodegas Agencias', detail: ['Agentes Interbank: Brinda el siguiente código 2735001', 'Agencias Market de Interbank: Costo adicional S/. 2.00.'] },
    { id: 'Banbif', url: Banbif, info: 'Agencias', detail: [null] },
    { id: 'Fullcarga', url: Fullcarga, info: 'Agentes y Bodegas Agencias', detail: ['Encuentra a FullCarga en Bodegas, Farmacias, cabinas de Internet y Locutorios.'] },
    { id: 'Scotiabank', url: Scotibank, info: 'Agencias', detail: [null] },
    { id: 'WesternUnion', url: WesternUnion, info: 'Agentes y Bodegas Agencias', detail: [null] },
    { id: 'Kasnet', url: Kasnet, info: 'Agentes', detail: [null] },
  ]
};