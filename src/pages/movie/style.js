import styled from 'styled-components';
const theme = {
    dark: '#111',
    white: '#fff',
    marker: '#032541'
}
const Style = styled.div`
.movieDetails{
    .backgroundMovie{
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    .backgroundDrop{
        background-image:linear-gradient(to right, #073844  150px, rgba(16,5,65,0.6)  100%);
    }
    }
    .btn-light:hover{
        background-color:${theme.dark};
        color:${theme.white};
    }
    img{
        max-width:250px;
        margin:0 auto;
    }
    .mark-movie{
        width:40px;
        height:40px;
        max-width:40px;
        max-height:40px;
        background-color:${theme.marker};
    }
}
.galleryImage{
    position:relative;
    &:hover{
        cursor:pointer;
        &::after{
            background-color:rgba(0,0,0,0.3);
        }
    }
    &::after{
        background-color:rgba(0,0,0,0.0);
            content:'';
            position:absolute;
            width:100%;
            height:100%;
            top:0;
            left:0;
            transition: 0.4s;
    }
}
.mark-movie{
    position:relative;
    cursor:pointer;
    text-align:center;
    .rating{
        transition:0.2s;
        visibility:hidden;
        position:absolute;
        opacity:0;
        top:105%;
        background:${theme.marker};
        min-width:120px;
    }
    &:hover .rating{
        opacity:1;
        visibility:visible;
    }
}
`
export default Style;
