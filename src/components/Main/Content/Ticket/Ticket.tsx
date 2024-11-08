import {
  TicketBlock,
  TicketHeader,
  TicketInfo,
  TicketItem,
  TicketItemInfo,
  TicketItemTitle,
  TicketPrice,
} from "./Ticket.styled";
import { TicketDetails } from "../../../../models/types";
import { timeConverter } from "../../../../utils/timeConverter";

interface TicketProps {
  ticket: TicketDetails;
}

export const Ticket = ({ ticket }: TicketProps) => {
  const { price, duration, from, airline, to, time, connection } = ticket;
  const priceToString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return (
    <TicketBlock>
      <TicketHeader>
        <TicketPrice>{priceToString} Р</TicketPrice>
        <img src={`./${airline}-logo.png`} alt="company logo" />
      </TicketHeader>
      <TicketInfo>
        <TicketItem>
          <TicketItemTitle>
            {from} - {to}
          </TicketItemTitle>
          <TicketItemInfo>
            {time.startTime} - {time.endTime}
          </TicketItemInfo>
        </TicketItem>
        <TicketItem>
          <TicketItemTitle>В пути</TicketItemTitle>
          <TicketItemInfo>{timeConverter(duration)}</TicketItemInfo>
        </TicketItem>
        <TicketItem>
          <TicketItemTitle>Пересадки</TicketItemTitle>
          <TicketItemInfo>
            {connection
              ? connection === 1
                ? `${connection} пересадка`
                : `${connection} пересадки`
              : `Без пересадок`}
          </TicketItemInfo>
        </TicketItem>
      </TicketInfo>
    </TicketBlock>
  );
};
