import { create } from 'apisauce'

// define the api
const api = create({ baseURL: 'https://api.themoviedb.org/3/authentication' });
api.addResponseTransform((response) => {
    if (response.status >= 400 || !response.ok) {
    }
});


export default api;