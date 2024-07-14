import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// init states
const initState = {
  settings: {
    langID: 'en',
    roleID: 0,
  },
};

export type Settings = typeof initState.settings;

// reducer
const settings = createSlice({
  name: 'settings',
  initialState: initState,
  reducers: {
    setLangID(state, action) {
      state.settings.langID = action.payload;
    },
    setRoleID(state, action: PayloadAction<number>) {
      // New reducer to set roleID
      state.settings.roleID = action.payload;
    },
  },
});

export const {setLangID, setRoleID} = settings.actions;
export default settings.reducer;

export const selectSettings = (state: any) =>
  state.settings.settings as Settings;
