// lib/Main.js
import { connect } from 'react-redux';
// Y el componente puramente presentacional de Main, ya sin hack
import MainComponent from '../components/Main';

const MainWithRedux = connect(
  function mapStateToProps(state) {
    const {
      dataList
    } = state.AppReducer;

    return {
      data: dataList
    };
  }
)(MainComponent);

export default MainWithRedux;