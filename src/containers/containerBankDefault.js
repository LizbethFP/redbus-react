import { connect } from 'react-redux';
import SliderBankIcons from '../components/SliderBankIcons';


//Esta funcion representa el enlace de redux con react
function mapStateToProps(state) {
  return { dataFixed: state.activebank }
}


export default connect(mapStateToProps)(SliderBankIcons)