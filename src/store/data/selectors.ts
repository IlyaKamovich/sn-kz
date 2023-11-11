import { RootState } from '..';
import { imageData } from '../../constants/image-data';

export const loadingSelector = (state: RootState) => state.dataSlice.isLoading;
export const offersSelector = (state: RootState) => state.dataSlice.offers;

export const colorSelector = (state: RootState) => state.dataSlice.color;
export const sizeSelector = (state: RootState) => state.dataSlice.size;
export const selectedImageSelector = (state: RootState) => {
  const currentColor = state.dataSlice.color;
  if (currentColor in imageData) {
    return imageData[currentColor as keyof typeof imageData];
  }
  return Object.values(imageData)[0];
};
