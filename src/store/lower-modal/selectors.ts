import { RootState } from '..';

export const isLowerModalSelector = (state: RootState) => state.lowerModalSlice.isOpen;
