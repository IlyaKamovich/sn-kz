import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LowerModalState {
  isOpen: boolean;
}

const initialState: LowerModalState = { isOpen: false };

const lowerModalSlice = createSlice({
  name: 'lower-modal',
  initialState,
  reducers: {
    toggleLowerModal(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleLowerModal } = lowerModalSlice.actions;
export default lowerModalSlice.reducer;
