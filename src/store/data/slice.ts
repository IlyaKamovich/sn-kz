import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import filter from 'lodash/filter';
import { CONFIG } from '@/config';

export type Value = string | number;

interface DataState {
  color: Value;
  size: Value;
  isLoading: boolean;
  offers: IOffer[];
}

export interface IOffer {
  _id: string;
  name: string;
  productId: string;
  article: string;
  externalId: string;
  quantity: number;
  isActive: boolean;
  color: string;
  size: string;
}

const initialState: DataState = {
  color: '',
  size: '',
  isLoading: true,
  offers: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDefaultColor(state, action: PayloadAction<Value>) {
      state.color = action.payload;
    },
    setDefaultSize(state, action: PayloadAction<Value>) {
      state.size = action.payload;
    },
    changeColor(state, action: PayloadAction<Value>) {
      state.color = action.payload;
    },
    changeSize(state, action: PayloadAction<Value>) {
      state.size = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isLoading = false;
        state.offers = [];
      });
  },
});

export const fetchOffers = createAsyncThunk('offer', async () => {
  const response = await fetch(`${CONFIG.REQUESTS.GET_OFFERS}/${CONFIG.CRM.ARTICLE}`);
  const data: IOffer[] = await response.json();
  const filteredData = filter(data, (offer: IOffer) => offer.quantity >= 5);
  return filteredData || [];
});

export const { changeColor, changeSize, setDefaultColor, setDefaultSize } = dataSlice.actions;
export default dataSlice.reducer;
