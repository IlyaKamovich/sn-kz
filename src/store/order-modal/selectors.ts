import { RootState } from '..';

export const isModalSelector = (state: RootState) => state.orderModalSlice.isOpen;
