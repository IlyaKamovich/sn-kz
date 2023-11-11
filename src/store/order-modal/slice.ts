import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface OrderModalState {
  isOpen: boolean;
}

const initialState: OrderModalState = { isOpen: false };

const orderModalSlice = createSlice({
  name: 'order-modal',
  initialState,
  reducers: {
    toggleModal(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleModal } = orderModalSlice.actions;
export default orderModalSlice.reducer;
