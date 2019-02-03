import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../Reducers';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
