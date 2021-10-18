import styled from "styled-components";

const theme = {
    starStrokColor: '#ffe000',
    starFillColor: '#fff',
    starFillHover: `#ffe000`,
    starStrokColorHover: 'none'
}
export const Style = styled.div`
.nav-star{
    div.link{
        padding:0 2px;
        svg {
            width: 16px;
            fill: ${theme.starFillColor};   
            stroke: ${theme.starStrokColor};
            transition:0.2s;
        }
        &:hover {
            svg {
            fill:  ${theme.starFillHover};
            stroke: ${theme.starStrokColorHover};
            }
            &~div svg {
                fill:  ${theme.starStrokColor};
                stroke: ${theme.starStrokColorHover};
            } 
        }
    }
} 
`