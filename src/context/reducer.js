
let requestToken = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).request_token : '';
let sessionId = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).session_id : '';
let username = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).username : '';

export const initialState = {
    requestToken: '' || requestToken,
    sessionId: '' || sessionId,
    username: '' || username,
}

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState
            };
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                requestToken: action.payload.request_token,
                sessionId: action.payload.session_id,
                username: action.payload.username
            };
        case "LOGOUT":
            return {
                ...initialState,
                requestToken: '',
                sessionId: '',
                username: ''
            };
        case "LOGIN_ERROR":
            return {
                ...initialState
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}