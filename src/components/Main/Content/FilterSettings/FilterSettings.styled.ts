import styled from "styled-components";
import { device } from "../../../../models/breakpoints";

export const FilterBox = styled.div`
  background-color: #4e148c;
  border: none;
  border-radius: 10px;
`;
export const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterHeader = styled.div`
  display: none;
  @media only screen and ${device.md} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #4e148c;
    color: #fff;
    border-radius: 10px;

    padding: 13px 23px;
    font-size: 16px;
    font-weight: meduim;
  }
`;
export const FilterSettingsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  cursor: pointer;
  font-size: 12px;
  font-weight: medium;
`;
export const FilterVisibleBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 65px;
  max-height: 223px;
  justfy-content: flex-start;
  background-color: #4e148c;
  padding-left: 24px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
