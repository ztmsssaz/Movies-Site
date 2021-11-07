import styled from 'styled-components';

const Style = styled.div`
.userArea{
    background-image:radial-gradient(at 30% top, #073844 0%, rgba(3,37,65, 1) 70%);
    background-position: 0px 0px;
    background-color: #0a1526;
    position: relative;
    top:0;
    left:0;
    div.inner_content {
        background-image:url('/inner-light_blue.svg');
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: center -250px;
        position: relative;
        top: 0;
        left: 0;
        z-index: 2;
        padding: 0;
        min-height:50vh;
    }
    .avatarUser{
        img{
            max-width:150px;
        }
    }
    .aboutUser{
        min-width: 480px;
    }
    .circleRating{
        width:60px;
    }
}
`
export default Style;
