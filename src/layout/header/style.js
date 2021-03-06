import styled from 'styled-components';

const theme = {
    black: '#000',
    white: '#fff',
    lightGray: '#abb7c4',
    background: '#032541',
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
    top:0;
    background-color: ${theme.background};
    .logo{
        width: 154px;
        height: 20px;
    }
    .navbar-default li a{
        font-weight:bold;
        color: ${theme.white};
        &:hover{
            color: ${theme.lightGray}
        }
    }
    .profile{
        img{
            max-width:35px;
        }
    }
    .dropdown-menu li a{
        transition:background 0.2s;
        &:hover{
            color:${theme.white};
            background: ${theme.background}
        }
    }
}
header.mobileHeader{
    display: none;
}
@media (max-width:991px){
    header.mainHeader{
        display: none;
    }
    header.mobileHeader{
        position: fixed;
        display: block;
        width: 100%;
        z-index:100;
        top:0;
        background-color: ${theme.background};
        .logo{
            max-width: 180px;
        }
        .offcanvas#leftNavbar{
            max-width: 270px;
        }
}
}
`
export default Style;
