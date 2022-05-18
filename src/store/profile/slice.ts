import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ProfileState {
  visible: boolean;
  name: string;
}

const initialState: ProfileState = {
  visible: true,
  name: 'Anonymous',
};

const profileSlice = createSlice({
  initialState,
  name: 'profile',
  reducers: {
    toggleProfile(state) {
      state.visible = !state.visible;
    },
    changeName(state, action: PayloadAction<{ name: string }>) {
      state.name = action.payload.name;
    },
  },
});

export const { toggleProfile, changeName } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
