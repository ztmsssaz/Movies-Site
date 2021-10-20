import styled from 'styled-components';

const Style = styled.div`
.movieBox{
    img{
        min-width: 150px;
        min-height: 255px;
        background-image: url('/images/background/picture-grey.svg');
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: center;
    }
}

.nav-tabs .nav-link{
    border-color: #dee2e6 #dee2e6;
    border-right: solid 1px #dee2e6;
    border-top:none;
    border-bottom:none;
    border-radius: 0;
    background: #032541;
    color: #fff;
    &:hover{
        background: #97cfff;
    }
    &.active {
    border:solid 1px #dee2e6 ;
    border-right:none;
    background: #fff;
    color: #000;
    }
}
`
export default Style;
