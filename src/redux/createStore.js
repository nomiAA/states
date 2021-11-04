import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import StateReducer from './Reducers/StateReducers';

const store=createStore(rootReducer,applyMiddleware(thunk));
console.log("store"+JSON.stringify(store))
console.log("initial store value ",store.getState());
 const unsubscribe= store.subscribe(()=>console.log("changed state",store.getState()))
export default store;