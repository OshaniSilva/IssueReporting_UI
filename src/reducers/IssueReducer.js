import {CREATE_ISSUE} from '../actions/ActionTypes';
import initialState from "./InitialState";

// const initialState = [];

function IssueReducer(state = initialState.editIssueData, action) {
    const { type, payload } = action;
    console.log("====REDUCER==payload====");
    console.log(payload);
    switch (type) {
        case CREATE_ISSUE:
            console.log("REDD2 2222");
            console.log( Object.assign({}, state, action.payload));
            console.log("red 333")
            // console.log([...state, payload]);
            return Object.assign({}, state, action.payload);
            // return [...state, payload];
        default:
            return state;
    }
};


// function IssueReducer(issues = initialState, action) {
//     const { type, payload } = action;
//     console.log("====REDUCER======");
//     switch (type) {
//         case CREATE_ISSUE:
//             return [...issues, payload];
//         default:
//             return issues;
//     }
// };

export default IssueReducer;