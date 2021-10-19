import styled from 'styled-components';
const theme = {
    primary: '#032541',
    background: '#fff',
    backgroundHover: '#c6eaff',
    dark: '#111'
}
const Style = styled.div`
.genreBox{
    min-width:20%;
    a{
        border:solid 2px ${theme.primary};
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
