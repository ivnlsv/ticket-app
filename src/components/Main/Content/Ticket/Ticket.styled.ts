import styled from "styled-components";
import { device } from "../../../../models/breakpoints";

export const TicketBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e8ebf2;
  border-radius: 10px;
  padding: 32px 40px 25px;
  margin-bottom: 47px;
  @media only screen and ${device.md} {
    margin-top: 34px;
  }
`;
export const TicketHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;
export const TicketPrice = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #4e148c;
`;
export const TicketInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
`;
export const TicketItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TicketItemTitle = styled.span`
  color: #858ae3;
`;
export const TicketItemInfo = styled.span`
  color: #4e148c;
`;
