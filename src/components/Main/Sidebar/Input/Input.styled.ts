import styled from "styled-components";
import { device } from "../../../../models/breakpoints";

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  
`;
export const InpuItem = styled.input<{ isCheckbox: boolean }>`
  margin-right: 22px;
   margin-left: 24px;
  ${({ isCheckbox }) =>
    isCheckbox
    ? `
  appearance: none;
  position: relative;
  width: 21px;
  height: 21px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid #4E148C;
  cursor: pointer;
 
  
  &::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    font-size: 18px;
    color: #4E148C
    top: 0;
    left: 0;
  }
  &:checked::after {
    content: '✔';
    left: 2px;
    width: 21px;
    height: 21px;
    
  }
  @media screen and ${device.md} {
&::after {
  border-radius: 4px;
  border: 1px solid #fff;
  color: #fff;
 }
  &:checked::after {
    width: 21px;
    height: 21px;
    color: #fff;
  }
}
`
  : `
appearance: none;
 position: relative;
width: 21px;
height: 21px;
background: transparent;
border-radius: 4px;
border: 1px solid #4E148C;
transition: 0.3s;
cursor: pointer;
 border-radius: 50%;
 &::after {
  display: block;
  position: absolute;
   content: '';
   top: 50%;
   left: 50%;
   border-radius: 50%;
   background-color: #4E148C;
 }
 &:checked::after {
   top: 2px;
   left: 2px;
   width: 15px;
   height: 15px;
   
 }
 @media screen and ${device.md} {
   border: 1px solid #fff;
   &::after {
     background-color: #fff;
   }
     &:checked::after {
  background-color: #fff;
  
}
 }

`}
`;
export const InputLabel = styled.label`
color: #858AE3;
cursor: pointer;
user-select: none;
@media screen and ${device.md} {
  color: #fff;
}
`
