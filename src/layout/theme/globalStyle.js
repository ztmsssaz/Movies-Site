import { createGlobalStyle } from "styled-components";

const theme = {
  primaryColor: '#dd003f',
  scoundry: '#083143',
  btnHover: '#aa0433',
  white: '#ffffff',
  whiteSecondary: '#f8f8f8',
  whiteSmoke: '#fafafa',
  whiteSmokeSecondary: '#f2f2f2',
  whiteLogin: '#FCFDFF',
  whiteActivation: '#f0f0f0',
  whiteProfile: '#f7f7f7',

  gray: '#868686',
  graySecondary: '#A0A0A0',
  darkGray: '#585858',
  darkGraySecondary: '#7b7b7b',
  lightGray: '#D8D8D8',
  lightGraySecondary: '#EFEFEF',
  grayLabel: '#959595',
  grayPlaceHolder: '#d6d6d6',
  lightGrayLabel: '#9b9b9b',
  grayActivation: '#9f9f9f',
}
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'karla';
  src: url('/fonts/Karla-Regular.ttf') format('trueType'),
  url('/fonts/Karla-Regular.woff') format('woff');
  font-weight: normal;
}
@font-face {
  font-family: 'karla';
  src: url('/fonts/Karla-Bold.ttf') format('trueType'),
  url('/fonts/Karla-Bold.woff') format('woff');
  font-weight: bold;
}
/* font RobotoSlab*/
@font-face {
  font-family: 'roboto-slab';
  src: url('/fonts/RobotoSlab-Bold.ttf') format('trueType'),
  url('/fonts/RobotoSlab-Bold.woff') format('woff');
  font-weight: 900;
}
@font-face {
  font-family: 'roboto-slab';
  src: url('/fonts/RobotoSlab-Regular.ttf') format('trueType'),
  url('/fonts/RobotoSlab-Regular.woff') format('woff');
  font-weight: 700;
}
@font-face {
  font-family: 'roboto-slab';
  src: url('/fonts/RobotoSlab-Light.ttf') format('trueType'),
  url('/fonts/RobotoSlab-Light.woff') format('woff');
  font-weight: 500;
}
@font-face {
  font-family: 'roboto-slab';
  src: url('/fonts/RobotoSlab-Thin.ttf') format('trueType'),
  url('/fonts/RobotoSlab-Thin.woff') format('woff');
  font-weight: 300;
}
body,html{
  overflow-x:hidden;
  font-family:'karla';
  padding-right: 0!important;
  padding-left: 0!important;
}
a{
  text-decoration: none;
  color: #abb7c4;
  &:hover{
    color: ${theme.darkGray}
  }
} h1,h2,h3,h4,h5,h6{
  font-weight:bold;
}
  .rtl{
    direction:rtl;
  }
  .ltr{
    direction:ltr;
  }
  .font-weight-normal{
    font-weight:normal;
  }
.rounded{
  &-15{
    border-radius:15px;
  }
  &-10{
    border-radius:15px;
  }
}
.auth-btn{
    border-radius:20px;
    background-color: ${theme.primaryColor};
    text-align: center;
    color: ${theme.white};
    padding: 0.5rem 1.25rem;
    transition: background 0.3s;
    &:hover{
      background-color: ${theme.btnHover};
      color: ${theme.white}
    }
  }
  .searchForm{
    form[name="search"] {
        button{
            position:absolute;
            right:0;
            top:0;
        }
    }
}
.pagination{
  height:40px;
  border: 1px solid #edf1f7;
  width:fit-content;
  border-radius:10px;
  margin:0 auto;
  background-color: ${theme.white};
  .active{
    background-color: ${theme.scoundry};
    color:${theme.white};
  }
  li{
    &:not(:last-child){
      border-left: 1px solid #edf1f7;
    }
    display:flex;
    align-items:center;
    &:hover{
      background-color: ${theme.primaryColor} !important;
      color: #fff !important;
      }
    &.previous {
      border-radius:10px 0 0 10px;
      a{
        min-width: 71px;
      }
    }
    &.next {
      border-radius:0 10px 10px 0;
      a {
        min-width: 65px;
      }
    }
    a {
      cursor: pointer;
      padding:10px 15px;
    }
  }
}
/* poster path default style */
.posterPathBackground{
  background-image: url('/images/background/picture-grey.svg');
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
}
/* white-space */
.preLineSpace{
  white-space:pre-line;
}
`

export default GlobalStyle;