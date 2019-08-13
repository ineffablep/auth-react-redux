import 'cross-fetch/polyfill';
import {
    ON_LOGIN,
    ON_LOGIN_FIELD_CHANGE,
    SUCCESS,
    ERROR,
    IN_PROGRESS
} from "../const";

export const onLoginClick = () => {
    return (dispatch, getState) => {
        const state = getState();
        dispatch({ type: ON_LOGIN, status: IN_PROGRESS });
        return fetch('http://localhost:8000/auth', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state.auth),
        })
            .then(response => response.json())
            .then(json => dispatch({
                type: ON_LOGIN, status: SUCCESS, response: json
            })).catch(e =>
                dispatch({
                    type: ON_LOGIN, status: ERROR, error: e
                })
            );
    };
};

export const onLoginFieldChange = (id, value) => {
    return {
        type: ON_LOGIN_FIELD_CHANGE, data: { id, value }
    };
};
