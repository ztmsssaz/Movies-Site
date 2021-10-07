import styled from 'styled-components';
const Style = styled.div`
.topSection{
    background-image:url('/images/background/slider-bg.jpg');
    background-repeat: no-repeat;
    background-position:top center;
    background-size: cover;
    padding-top:80px;
.mainSlider{
    max-width:1200px;
    padding-top:3rem;
    padding-bottom:3rem;
    img{
       border-radius:15px; 
    }
}
.miniSlider{
    .prev, .next{
        position:absolute;
        top:50%;
        transform:translate(-50%,0);
    }
    .next{
        right:0;
    }
    .prev{
        left:0;
    }
}

}
`
export default Style;
