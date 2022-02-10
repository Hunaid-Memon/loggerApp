import { GET_LOGS, SET_LOADING, LOGS_ERROR } from '../actions/types';

const initialstate = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialstate, action) => {
    switch(action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};
