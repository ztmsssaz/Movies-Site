import styled from 'styled-components';

const Style = styled.div`
.searchImage{
    max-width:60px;
}
.offcanvas{
    max-height:120px;
}
.searchReasultsBox{
    max-height:300px;
    overflow-y:scroll;
    a{
        transition:0.3s;
        &:hover{
            background-color:#073844 ;
            color:#fff;
        }
    }
}
`
export default Style;
