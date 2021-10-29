import styled from 'styled-components';

const Style = styled.div`
.movieBox{
    img{
        min-width: 100px;
        min-height: 200px;
        border-radius: 15px 15px 0 0;
    }
}
@media (min-width:1400px){
    .movieBox{
        img{
            min-height: 300px;
        }
    }
}
.rateGauge{
    position:absolute;
    bottom: -15px;
    left: 10px;
    z-index:10;
}
`
export default Style;
