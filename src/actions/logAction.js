import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// Method No 1
// export const getLogs = () => {
//     return async (dispatch) => {
//         // Set loading to true
//         setLoading();
//         // Fetch from API
//         const res = await fetch('/logs');
//         const data = await res.json();
//         // Dispatch
//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }

// Method No 2
export const getLogs = () => async dispatch => {
    try {
        // Set loading to true
        setLoading();
        // Fetch from API
        const res = await fetch('/logs');
        const data = await res.json();
        // Dispatch
        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}