import { create } from 'apisauce';
import {
    HTTP_STATUS_CODE_OK,
    HTTP_STATUS_CODE_CREATED,
    HTTP_STATUS_CODE_NO_CONTENT,
    HTTP_STATUS_CODE_BAD_REQUEST,
    HTTP_STATUS_CODE_UNAUTHORIZED,
    HTTP_STATUS_CODE_FORBIDDEN,
    HTTP_STATUS_CODE_NOT_FOUND,
    HTTP_STATUS_CODE_SERVER_ERROR,
    PARAMS
} from './constance';

// define the api
const api = create({ baseURL: 'https://api.themoviedb.org/3/' });
function errorHandling(response) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (response.status === 401) {
        window.location.href = '/login';
    }
}

api.addResponseTransform((response) => {
    console.log('status:', response.status);
    switch (response.status) {
        // 401
        case HTTP_STATUS_CODE_UNAUTHORIZED:
            errorHandling(response);
            break;
        // 403
        case HTTP_STATUS_CODE_FORBIDDEN:
            errorHandling(response);
            break;
        // 404
        case HTTP_STATUS_CODE_NOT_FOUND:
            errorHandling(response);
            break;
        // 500
        case HTTP_STATUS_CODE_SERVER_ERROR:
            errorHandling(response);
            break;
        // 400
        case HTTP_STATUS_CODE_BAD_REQUEST:
            errorHandling(response);
            break;
        // 200
        case HTTP_STATUS_CODE_OK:
            errorHandling(response);
            break;
        // 201
        case HTTP_STATUS_CODE_CREATED:
            errorHandling(response);
            break;
        // 204
        case HTTP_STATUS_CODE_NO_CONTENT:
            errorHandling(response);
            break;
        default:
            throw new Error('Unhandled error in API');
    }
});

export async function getRequest(url, params = PARAMS) {
    return api.get(url, params);
}
export async function postRequest(url, body, ctx) {
    return api.post(url, body);
}
export async function putRequest(url, params) {
    return api.post(url, params);
}
export async function deleteRequest(url, params) {
    return api.post(url, params);
}