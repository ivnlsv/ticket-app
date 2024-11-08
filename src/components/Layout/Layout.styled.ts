import styled from "styled-components";
import { device } from "../../models/breakpoints";

export const MainBlock = styled.main`
diplay: flex;
margin-left: 276px;
margin-top: 84px;

@media only screen and ${device.md} {
padding: 20px 72px 206px;
margin-left: 0;
margin-top: 0;
}
@media only screen and ${device.sm} {
 padding: 10px 36px 103px;
 justify-content: center;
 margin-left: 0;
}
 @media only screen and ${device.xs} {
  padding: 31px 15px 147px;
 }
`