import { create } from 'apisauce';
import {
    PARAMS
} from './constant';

// define the api
const api = create({ baseURL: 'https://api.themoviedb.org/3', params: PARAMS });

api.addResponseTransform((response) => {
    console.log('status:', response.status);
    if (response.status === 404) {
        window.location.href = '/page404';
    }
});

export async function getRequest(url, params = PARAMS) {
    return api.get(url, params);
}
export async function postRequest(url, body) {
    return api.post(url, body);
}
export async function putRequest(url, params) {
    return api.post(url, params);
}
export async function deleteRequest(url, params) {
    return api.post(url, params);
}