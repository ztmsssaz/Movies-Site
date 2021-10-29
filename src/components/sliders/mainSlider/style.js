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
        min-height: 80px;
        min-width: 130px;
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