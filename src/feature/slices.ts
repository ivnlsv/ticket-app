
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterType, TicketDetails } from "../models/types";
import data from "../mock.json";

type initialStates = {
  isLoading: boolean;
  tickets: TicketDetails[];
  filters: FilterType;
};

const initialState: initialStates = {
  isLoading: false,
  tickets: [],
  filters: {
    airlines: [],
    connections: [],
  },
};

const mock = (success: boolean, timeout: number = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(data);
      } else {
        reject({ message: "Error" });
      }
    }, timeout);
  });
};

export const fetchTickets = createAsyncThunk(
  "tickets/fetch",
  async (_, api) => {
    try {
      const response = await mock(true, 2000);

      return response as TicketDetails[];
    } catch (e) {
      return api.rejectWithValue("Ошибка");
    }
  }
);

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,

  reducers: {
    addFilters: (state, action) => {
      if (action.payload.name === "airlines") {
        if (state.filters.airlines.some((c) => c === action.payload.value)) {
          return;
        }
        state.filters.airlines.push(action.payload.value);
      }
      if (action.payload.name === "connections") {
        if (
          state.filters.connections.some((c) => c === +action.payload.value)
        ) {
          return;
        }
        state.filters.connections.push(+action.payload.value);
      }
    },
    removeFilters: ({ filters }, action) => {
      if (action.payload.name === "airlines") {
        filters.airlines = filters.airlines.filter(
          (item) => item !== action.payload.value
        );
      }

      if (action.payload.name === "connections") {
        filters.connections = filters.connections.filter(
          (item) => item !== +action.payload.value
        );
      }
    },
    sortByPrice: (state) => {
      state.tickets.sort((a, b) => a.price - b.price);
    },
    sortByDuration: (state) => {
      state.tickets.sort((a, b) => a.duration - b.duration);
    },
    sortByOptimal: (state) => {
      state.tickets.sort((a, b) => a.price - b.price);
      state.tickets.sort((a, b) => a.connection - b.connection);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTickets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchTickets.fulfilled,
      (state, action: PayloadAction<TicketDetails[]>) => {
        state.isLoading = false;
        state.tickets = action.payload;
      }
    );
    builder.addCase(fetchTickets.rejected, (state) => {
      state.isLoading = false;
      state.tickets = [];
    });
  },
});

export const {
  addFilters,
  removeFilters,
  sortByPrice,
  sortByDuration,
  sortByOptimal,
} = ticketsSlice.actions;

export default ticketsSlice;
