export const isloggedIn = () => {
    let token = localStorage.getItem('currentUser')
        ? JSON.parse(localStorage.getItem('currentUser')).session_id : '';
    if (token) {
        return true;
    } else {
        return false;
    }
};
