import styled from "styled-components";
import { device } from "../../../../models/breakpoints";
export const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 55px;
  margin-bottom: 29px;
  border-radius: 10px;
    @media only screen and ${device.md} {
    order: -1;
     margin-bottom: 0;
  } 
  @media only screen and ${device.sm} {
    margin-bottom: 10px;
  }
`;
export const HeaderItem = styled.button`
  font-family: "Inter", serif;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  cursor: pointer;
  background-color: #e8ebf2;
  border: 1px solid #4e148c;
  &:nth-child(1) {
   border-top-left-radius: 10px;
   border-bottom-left-radius: 10px;
  }
  &:nth-child(3) {
   border-top-right-radius: 10px;
   border-bottom-right-radius: 10px;
  }  
  
  color: #4e148c;
  &:hover {
  background-color: #4e148c;
  color: #fff;
  }
   @media only screen and ${device.xs} {
   font-size: 12px;
 }
  
`;
