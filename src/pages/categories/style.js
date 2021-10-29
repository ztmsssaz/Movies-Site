import styled from 'styled-components';
const theme = {
    primary: '#032541',
    background: '#fff',
    backgroundHover: 'rgb(198 234 255 / 50%)',
    dark: '#111'
}
const Style = styled.div`
.genreBox{
    min-width:20%;
    a{
        background:${theme.background};
        color:${theme.dark};
        transition:background 0.3s;
        &:hover {
        background:${theme.backgroundHover};
        color:${theme.primary}
        }
    }
}
`
export default Style;
