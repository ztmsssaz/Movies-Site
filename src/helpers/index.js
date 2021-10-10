export const isloggedIn = () => {
    let token = localStorage.getItem('currentUser')
        ? JSON.parse(localStorage.getItem('currentUser')).session_id : '';
    if (token) {
        return true;
    } else {
        return false;
    }
};
export function textDots(string, numberOfChar = 15) {
    if (typeof string === 'string') {
        return `${string.slice(0, numberOfChar)} ${string.length > numberOfChar ? '...' : ''
            }`;
    } else {
        return string;
    }
}
export function toHours(totalMinutes) {
    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;
    return (`${hours}h ${minutes}m`);
}
export function defaultImage(el) {
    el.target.src = "/images/unkown-poster.jpg";
}
export async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)

    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'image file name here'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
