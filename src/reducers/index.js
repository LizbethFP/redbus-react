import { combineReducers } from 'redux';
import reducerBanksTab1 from './reducerBanksTab1';
import reducerBanksTab2 from './reducerBanksTab2';
import reducerBanksTab1Active from './reducerBanksTab1Active';


const rootReducer = combineReducers({
  banks: reducerBanksTab1,
  banks2: reducerBanksTab2,
  active_bank: reducerBanksTab1Active

});

export default rootReducer;