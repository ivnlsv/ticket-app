export interface TicketTime {
    startTime: string;
    endTime: string;
}

export interface TicketDetails {
    id: number;
    from: string;
    to: string;
    airline: string;
    price: number;
    currency: 'RUB';
    time: TicketTime;
    duration: number;
    date: string;
    connection: number | null;
}

export interface FilterType {
  airlines: string[]
  connections: number[]
}

export interface FilterInputs {
  connectionQuntity: string[];
  airLines: string[];
}