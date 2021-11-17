import { postRequest } from 'api';

export async function loginUser(dispatch, loginPayLoad) {
    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        let response = await postRequest('/authentication/token/validate_with_login', loginPayLoad);
        let data = await response.data;

        if (data.success) {
            response = await postRequest('/authentication/session/new', { request_token: loginPayLoad.request_token })
            if (response.data.success) {
                data.session_id = response.data.session_id;
                data.username = loginPayLoad.username;
                dispatch({ type: "LOGIN_SUCCESS", payload: data });
                localStorage.setItem('currentUser', JSON.stringify(data));
            }
        }
        return data;
    } catch (error) {
        dispatch({ type: "LOGIN_ERROR", error: error })
    }
}

export function logOut(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    window.location.reload();
}