import styled from "styled-components";

const Style = styled.div`
.video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    background:url('/images/background/deadpool.png');
   iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  `
export default Style;