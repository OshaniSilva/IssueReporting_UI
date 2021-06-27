import {CREATE_ISSUE} from './ActionTypes';
import api from '../api/api';
import store from '../store';


export const createIssue = (data) => async (dispatch) => {
    try {
        console.log("action 1111");
        const res = await api.createIssueApi(data);
        console.log("action 222");
        dispatch({
            type: CREATE_ISSUE,
            payload: res.data,
        });
        return {type: CREATE_ISSUE, payload: res.data};
        // return Promise.resolve(res.data);
    } catch (err) {
        console.log("====ACTION======");
        return Promise.reject(err);
    }
};
