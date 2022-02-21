import { ADD_DEVELOPER, GET_DEVELOPERS, DEVELOPER_ERROR, DELETE_DEVELOPER, SET_LOADING } from "../actions/types";

const initialstate = {
    developers: null,
    loading: false,
    error: null
}

export default (state = initialstate, action) => {
    switch(action.type) {
        case ADD_DEVELOPER:
            return {
                developers: [...state.developers, action.payload],
                loading: false
            }
        case GET_DEVELOPERS:
            return {
                ...state,
                developers: action.payload,
                loading: false
            }
        case DELETE_DEVELOPER:
            return {
                ...state,
                developers: state.developers.filter(developer => developer.id !== action.payload),
                loading: false
            }
        case DEVELOPER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}