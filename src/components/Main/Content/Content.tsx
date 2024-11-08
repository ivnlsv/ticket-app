import { ContentBlock, LoadingBlock } from "./Content.styled";
import { Ticket } from "./Ticket/Ticket";

import { Button } from "./Button/Button";
import { useAppDispatch, useAppSelector } from "../../../feature/store";
import { useEffect } from "react";
import { fetchTickets } from "../../../feature/slices";

export const Content = () => {
  const { filters, tickets, isLoading } = useAppSelector((state) => state.tickets);
   const dispatch = useAppDispatch();
  let listTickets = [...tickets];
  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);
  if (isLoading) {
    return <LoadingBlock>Загрузка...</LoadingBlock>
  }
  Object.keys(filters).map((key) => {
    switch (key) {
      case "airlines": {
        if (filters.airlines.length) {
          filters.airlines.map(
            (filter) =>
              (listTickets = listTickets.filter(
                (ticket) => ticket.airline !== filter
              ))
          );
        }
        break;
      }
      case "connections": {
        if (filters.connections.length) {
          filters.connections.map(
            (filter) =>
              (listTickets = listTickets.filter(
                (ticket) => ticket.connection !== +filter
              ))
          );
        }
        break;
      }
    }

    return null;
  });
  return (
    <ContentBlock>
      {listTickets.map((ticket) => {
        return <Ticket ticket={ticket} key={ticket.id} />;
      })}

      <Button />
    </ContentBlock>
  );
};
