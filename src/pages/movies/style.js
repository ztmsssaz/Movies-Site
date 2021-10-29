import styled from 'styled-components';
const theme = {
    dark: '#111',
    white: '#fff',
    marker: '#032541',
    gray: '#ddd'
}
const Style = styled.div`
.movieDetails{
    min-height: 460px;
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
        min-width:250px;
        min-height:375px;
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
        min-width:130px;
    }
    &:hover .rating{
        opacity:1;
        visibility:visible;
    }
}
.modal{
    .btn-times{
        position:absolute;
        top:10px;
        left:10px;
        transition:color 0.3s;
        color:${theme.white};
        border:none;
        background-color:rgb(160 160 160 / 30%);
        &:hover{
            color:${theme.gray};
        }
    }

}
`
export default Style;
