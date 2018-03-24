// lib/FilterableProductTable/SearchBar
import { connect } from 'react-redux';
import MainComponent from '../components/Main';
import { showInstructionsIntBank, showInstructionsCashPay } from '../actions';

const showInstructions = connect(
  function mapStateToProps(state) {
    // buscamos los valores que nos interesan para el SearchBar
    // fíjate que el SearchBar no tiene por qué saber nada de los productos
    const {
      internetBank,
      cashPay
    } = state.AppReducer;

    // y devolvemos las nuevas props
    return {
      internetBank,
      cashPay
    };
  },
  // El segundo parámetro de `connect` es `mapDispatchToProps`.
  // El el mundo Redux al llamar a un `action creator` lo único que obtenemos
  // es un objeto que expresa que es lo que ha sucedido, pero no dispara la acción.
  // Para esto necesitas llamar a la función `dispatch` del store.
  // Esto es lo que hace `mapDispatchToProps` mapea llamadas a `dispatch` para
  // tus `action creators`
  function mapDispatchToProps(dispatch) {
    return {
      setFilterText(newIntBank) {
        dispatch(showInstructionsIntBank(newIntBank));
      },
      setInStockOnly(newCashPay) {
        dispatch(showInstructionsCashPay(newCashPay));
      }
    };
  }
)(MainComponent);

export default showInstructions;