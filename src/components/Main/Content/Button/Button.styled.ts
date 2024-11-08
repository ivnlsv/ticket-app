import styled from "styled-components";
import { device } from "../../../../models/breakpoints";

export const ButtonBlock = styled.button`
  margin-top: 74px;
  background-color: #4e148c;
  color: #fff;
  padding: 16px 200px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-bottom: 60px;
   @media only screen and ${device.sm} {
   padding: 16px 60px;
   margin-top: 50px;
 }
`;
