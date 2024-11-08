import styled from "styled-components";
import { device } from "../../models/breakpoints";

export const MainBlock = styled.main`
display: flex;
column-gap: 50px;
@media only screen and ${device.md} {
  flex-direction: column;
  row-gap: 10px;
}
`
export const ContentBlock = styled.div`
max-width: 727px;
width: 100%;
@media screen and ${device.md} {
  max-width: none;
  display: contents;
}
` 



