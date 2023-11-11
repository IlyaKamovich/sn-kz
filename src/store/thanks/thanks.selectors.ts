import { RootState } from '..';

export const thanksName = (state: RootState) => state.thanksSlice.name;
export const thanksPhone = (state: RootState) => state.thanksSlice.phone;
