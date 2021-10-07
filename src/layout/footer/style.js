import styled from 'styled-components';
const theme = {
    black: '#000',
    white: '#fff',
    borderColor: '#ddd',
    primaryColor: '#949494',
    light: '#e8e8e8',
    badgeColor: '#ff0000'
}
const Style = styled.div`
footer{
    background: linear-gradient(217deg, #073844, rgba(255,255,0,0) 70%),
    radial-gradient(at 30% top, #073844 0%, #100541 100%);
    .footerLogo{
        img{
            max-width:120px;
        }
    }
    h5{
        color:${theme.white}
    }
    ul{
        li a{
            padding:5px 0;
            &:hover{
                color:${theme.white}
            }
        }
    }
}
`
export default Style;
