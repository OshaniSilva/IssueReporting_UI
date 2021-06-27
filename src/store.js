import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import initialState from  './reducers/InitialState';

const initialState = {};

const middleware = [thunk];

console.log("STOREEEEEEEEEEEEEEEEEEEEEEEE");

const store = createStore(
    rootReducer,
    initialState.createIssueData,
    applyMiddleware(thunk)
    // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from './reducers/index';
// import thunk from 'redux-thunk';
//
// export default function store(initialState) {
//     return createStore(
//         rootReducer,
//         initialState,
//         applyMiddleware(thunk)
//     );
// }
