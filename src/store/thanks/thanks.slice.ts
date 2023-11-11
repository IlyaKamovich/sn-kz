import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ThanksState {
    name: string;
    phone: string;
}

const initialState: ThanksState = { name: '', phone: '' };

const thanksSlice = createSlice({
    name: 'thanks',
    initialState,
    reducers: {
        updateThanksData(state, action: PayloadAction<ThanksState>) {
            state.name = action.payload.name;
            state.phone = action.payload.phone;
        },
    },
});

export const { updateThanksData } = thanksSlice.actions;
export default thanksSlice.reducer;
