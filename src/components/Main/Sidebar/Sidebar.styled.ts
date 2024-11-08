import styled from "styled-components";
import { device } from "../../../models/breakpoints";

export const SidebarBlock = styled.div<{isOpen: boolean}>`
  ${({isOpen}) => !isOpen && 
 `
    @media screen and ${device.md} {
  max-height: 44px;
  }
  @media screen and ${device.sm} {
max-height: 40px;
} 
 `
}
 
   display: flex;
   flex-direction: column;
   max-width: 272px;
@media screen and ${device.md} {
  display: flex;
  max-width: none;
  background-color: #4e148c;
  border-radius: 10px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.25);
  overflow: hidden;
}  

 `;

export const SettingsHeader = styled.div`
 font-family: "Inter";
 font-size: 12px;
 font-weight: medium;
  @media screen and ${device.xxl} {
    display: none;
  }
  @media screen and ${device.md} {
    display: flex;
    justify-content: space-between;
    padding: 12px 25px 13px;
    color: #fff;
  }
  @media screen and ${device.sm} {
    padding: 12px 17px;
    font-size: 12px;
  }
`;
export const SettingsBlock = styled.div`
  @media screen and ${device.md} {
    display: flex;
    align-items: center;
    column-gap: 17px;
    font-size: 12px;
    cursor: pointer;
  }
`;
export const SettingsTitle = styled.div`
  color: #fff;
  @media screen and ${device.sm} {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
export const SidebarFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
  max-width: 272px;
  width: 100%;
  color: #4e148c;
  
  @media screen and ${device.md} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    max-width: none;
    background-color: #4e148c;
    color: #fff;
  }

  @media screen and ${device.sm} {
    column-gap: 10px;
  }

  @media screen and ${device.xs} {
    flex-direction: column;
    row-gap: 0;
  }
`;
