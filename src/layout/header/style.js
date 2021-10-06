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
header.mainHeader{
    position: absolute;
    width: 100%;
    z-index:100;
    .logo{
        max-width:90px;
        padding:5px 15px;
    }
    .navbar-default li a{
        font-weight:bold;
        &:hover{
            color: ${theme.white}
        }
    }
}
`
export default Style;
