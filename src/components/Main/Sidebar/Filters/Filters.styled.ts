import styled from "styled-components";
import { device } from "../../../../models/breakpoints";

export const FiltersBlock = styled.div`
box-sizing: border-box;
padding: 20px;
width: 100%;
border-radius: 10px;
background-color: #E8EBF2;

@media screen and ${device.md} {
  padding: 25px;
  background-color: transparent;
  border-radius: none;
  color: #fff;
  width: auto;
}  
`
export const FiltersTitle = styled.h2`
font-family: "Inter", serif;
font-size: 20px;
margin-top: 0;
`
export const FiltersForm = styled.form`
display: flex;
flex-direction: column;
row-gap: 19px;
`