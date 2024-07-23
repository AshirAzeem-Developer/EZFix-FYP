import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

// init states
const initState = {
  user: null,
};

export type UserStoreType = typeof initState.user;

// reducer
const user = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const {setUser} = user.actions;
export default user.reducer;

const selectUser = (state: any) => state?.user?.user as UserStoreType;

export const useUserSelector = () => {
  return useSelector(selectUser);
};
