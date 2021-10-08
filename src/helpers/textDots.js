export function textDots(string, numberOfChar = 15) {
    if (typeof string === 'string') {
        return `${string.slice(0, numberOfChar)} ${string.length > numberOfChar ? '...' : ''
            }`;
    } else {
        return string;
    }
}