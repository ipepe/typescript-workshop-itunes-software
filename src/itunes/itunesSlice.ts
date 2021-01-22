import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from '../store';

export type Software = {
  artistName: string;
  trackId: number;
  artworkUrl100: string;
  genres: string[];
  trackName: string;

  formattedPrice: string;
  averageUserRating: number | undefined;
  userRatingCount: number | undefined;
};

type ItunesState = {
  software: Software[];
};

export const itunesSlice = createSlice({
  name: 'itunes',
  initialState: {
    software: [],
  } as ItunesState,
  reducers: {
    fetchSoftware(state, action: PayloadAction<string>) {},
    setSoftware(state, action: PayloadAction<Software[]>) {
      state.software = action.payload;
    },
  },
});

export const { fetchSoftware, setSoftware } = itunesSlice.actions;

export const selectSoftware = (state: StoreState) => state.itunes.software;
