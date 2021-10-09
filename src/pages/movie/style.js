import styled from 'styled-components';
const theme = {
    dark: '#111',
    white: '#fff'
}
const Style = styled.div`
.movieDetails{
    .backgroundMovie{
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    }
    .btn-light:hover{
        background-color:${theme.dark};
        color:${theme.white};
    }
    img{
        max-width:250px;
        margin:0 auto;
    }
    .backgroundDrop{
        background-image:linear-gradient(to right, #073844  150px, rgba(16,5,65,0.6)  100%);
    }
}
`
export default Style;
