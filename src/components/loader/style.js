import styled from 'styled-components';

const theme = {
    black: '#000',
    white: '#fff',
    borderColor: '#ddd',
    primaryColor: '#949494',
    light: '#e8e8e8',
    badgeColor: '#ff0000'
}
const Style = styled.div`
    .bg-red{
        background:red;
    }
    .bg-blue{
        background:red;
    }
    .mx-1{
        margin-right:2px;
        margin-left:2px;
    }
    .img{
        margin:0 auto;
        max-width: 150px;
    }
`;
export default Style;