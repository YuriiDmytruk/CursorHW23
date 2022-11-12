import {combineReducers, createStore} from 'redux';
import {publications} from "./redux/reducer.js";

const reducer = combineReducers({
  publications
})

const store = createStore(
  reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export { store, }
