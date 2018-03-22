import { connect } from 'react-redux';
import SliderBankIcons from '../components/SliderBankIcons';
import { selectBank } from '../actions/action';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return { bankList: state.banks }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onSelectClick: selectBank }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderBankIcons)