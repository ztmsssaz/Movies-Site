import styled from "styled-components";
const theme = {
    primaryColor: '#dd003f',
    white: '#fff',
    gray: '#888'
}
const Style = styled.div`
.slideSize{
    max-width:270px;
    margin: 0 auto;
    img{
        min-height: 170px;
        background:url('/images/background/picture-grey.svg');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
}
.swiper-pagination{
    &-bullet{
        background:${theme.gray};
        opacity:0.4;
        &-active{
            background:${theme.primaryColor};
            opacity:1;
        }
    }
}
.mainSliderGauge{
    position:absolute;
    bottom:-20px;
    left:15px;
    z-index:10;
}
`

export default Style;