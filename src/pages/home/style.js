import styled from 'styled-components';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const Style = styled.div`
.hero{
    min-height:320px;
    background: url('/images/background/home-header-${getRandomInt(5)}.jpg') top center no-repeat;
    background-size: cover;
    .container-holder{
        padding: 4rem 0;
    }
}
.mainSliders{
    max-width:1200px;
    padding-top:3rem;
    padding-bottom:3rem;
    img{
        border-radius:15px; 
    }
}
.miniSliders{
    img{
        border-radius:8px;
    }
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

`
export default Style;
