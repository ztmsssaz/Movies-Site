import styled from "styled-components";
const theme = {
    primaryColor: '#dd003f',
    white: '#fff'
}
const Style = styled.div`
.slideSize{
    max-width:270px;
}
.swiper-pagination{
    &-bullet{
        background:${theme.white};
        opacity:0.4;
        &-active{
            background:${theme.primaryColor};
            opacity:1;
        }
    }
}
`

export default Style;