import
{   GET_LOGS, 
    ADD_LOG, 
    DELETE_LOG, 
    UPDATE_LOG, 
    SET_CURRENT, 
    CLEAR_CURRENT, 
    SET_LOADING,
    SEARCH_LOGS, 
    LOGS_ERROR } 
from 
     './types';

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
// Action to get logs
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

// Action to add a log
export const addLog = log => async dispatch => {
    try {
        // Set loading to true
        setLoading();
        // Create log
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        // Dispatch
        dispatch({
            type: ADD_LOG,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Action to delete a log
export const deleteLog = id => async dispatch => {
    try {
        // Set loading to true
        setLoading();
        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        });
        // Dispatch
        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Action to update a log
export const updateLog = log => async dispatch => {
    try {
        // Set loading to true
        setLoading();
        // Create log
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        // Dispatch
        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Action to Search logs
export const searchLogs = (text) => async dispatch => {
    try {
        // Set loading to true
        setLoading();
        // Fetch from API
        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();
        // Dispatch
        dispatch({
            type: SEARCH_LOGS,
            payload: data
        })
    } catch(err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
}

// Action to set the current log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
};

// Action to clear the current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}