import styled from 'styled-components';

const Style = styled.div`
.gradiant{
    background-image:radial-gradient(at 25% top, #032541 0%, #0a1526 40%);
    background-position: canter;
    background-color: #0a1526;
    position: relative;
    div.inner_content {
        background-image:url('/images/background/inner-light_blue.svg');
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: center ;
        position: relative;
        top: 0;x
        left: 0;
        z-index: 2;
        padding: 0;
        height:100%;
        .content{
            h2.fs-large {
                font-size:2rem;
            }
            img.deadpool{
                z-index:1;
            }
            .wrapper{
                div{
                    display:flex;
                    justify-content:start;
                    align-items:canter;
                    h2{
                        padding-right:0.5rem;
                        color: #d40242;
                        opacity:0.7;
                        font-size:3rem;
                        min-width:10%;
                        text-align:center;
                    }
                }
            }
        }
    }
}
@media (min-width:768px){
    .gradiant{
        div.inner_content {
            .content{
                h2.fs-large {
                    font-size:8rem;
                    position:relative;
                    top:55px;
                    z-index:-1;
                }
            }
        }
    }
}
`
export default Style;
