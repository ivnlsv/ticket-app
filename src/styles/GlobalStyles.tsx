import { createGlobalStyle } from "styled-components";
import InterBold from "../fonts/Inter-Bold.woff2";
import InterMedium from "../fonts/Inter-Medium.woff2";
import normalize from "styled-normalize";

export const GlobaStyle = createGlobalStyle`

${normalize}

* {
    box-sizing: border-box;
    
    
}
body {
    @font-face {
fonta-family: "Inter";
 font-weight: bold;
  font-style: normal;
  src: url(${InterBold}) format('woff2');

}
@font-face {
fonta-family: "Inter";
 font-weight: medium;
  font-style: normal;
  src: url(${InterMedium}) format('woff2');

}  
    
    margin:0 auto;
    }
`;
