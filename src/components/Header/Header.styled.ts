import styled from "styled-components"
import { device } from "../../models/breakpoints"


export const HeaderBlock = styled.header`
max-width: 1920px;
margin-bottom: 24px;

@media only screen and ${device.sm} {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-top: 7px;
  flex-shrink: 0;
  }
  
`
export const HeaderWrapper = styled.div`
 display: flex; 
 align-items: center;
 img {
width: 100px;
height: 84px;
margin-right: 25px;
}
`
export const HeaderTitle = styled.div`
font-family: "Inter", serif;
font-size: 24px;
font-weight: bold;
color: #4E148C;
@media only screen and ${device.sm} {
  display: none;
}
`
