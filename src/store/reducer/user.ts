import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

// init states
const initState = {
  user: null,
  username: null,
  email: null,
  phoneNumber: null,
  name: null,
  cnic: null,
  dob: null,
  password: null,
  roleType: null,
  isAcceptedTermsAndConditions: false,
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
    updateUser(state, action) {
      // Update individual fields in the user state
      state.name = action.payload.name || state.name;
      state.phoneNumber = action.payload.phoneNumber || state.phoneNumber;
      // state.profileImage = action.payload.profileImage || state.profileImage;
    },
    setuserName(state, action) {
      state.username = action.payload;
    },

    setEmailAddress(state, action) {
      state.email = action.payload;
    },

    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setCnicNumber(state, action) {
      state.cnic = action.payload;
    },
    setDateOfBirth(state, action) {
      state.dob = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setRoleType(state, action) {
      state.roleType = action.payload;
    },
    setIsAcceptedTermsAndConditions(state, action) {
      state.isAcceptedTermsAndConditions = action.payload;
    },
  },
});

export const {setUser} = user.actions;
export const {setuserName} = user.actions;
export const {setEmailAddress} = user.actions;
export const {setPhoneNumber} = user.actions;
export const {setName} = user.actions;
export const {setCnicNumber} = user.actions;
export const {setDateOfBirth} = user.actions;
export const {setPassword} = user.actions;
export const {setRoleType} = user.actions;
export const {updateUser} = user.actions;

export const {setIsAcceptedTermsAndConditions} = user.actions;

export default user.reducer;

const selectUser = (state: any) => state?.user?.user as UserStoreType;

export const useUserSelector = () => {
  return useSelector(selectUser);
};
