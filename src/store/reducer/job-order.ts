import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

// init states
const initState = {
  skill: null,
  jobDescription: null,
  jobBookingData: null,
  jobPhotos: [],
  skillId: null,
  skillHourlyRate: null,
  providerName: null,
};

export type JobOrderStoreType = typeof initState.jobDescription;

// reducer
const jobOrder = createSlice({
  name: 'jobOrder',
  initialState: initState,
  reducers: {
    setSkill(state, action) {
      state.skill = action.payload;
    },

    setJobDescription(state, action) {
      state.jobDescription = action.payload;
    },
    setJobBookingDate(state, action) {
      state.jobBookingData = action.payload;
    },
    setJobPhotos(state, action) {
      state.jobPhotos = action.payload;
    },
    setSkillId(state, action) {
      state.skillId = action.payload;
    },
    setSkillHourlyRate(state, action) {
      state.skillHourlyRate = action.payload;
    },
    setPrviderName(state, action) {
      state.providerName = action.payload;
    },
  },
});

export const {setSkill} = jobOrder.actions;
export const {setJobDescription} = jobOrder.actions;
export const {setJobBookingDate} = jobOrder.actions;
export const {setJobPhotos} = jobOrder.actions;
export const {setSkillId} = jobOrder.actions;
export const {setSkillHourlyRate} = jobOrder.actions;
export const {setPrviderName} = jobOrder.actions;

export default jobOrder.reducer;

const selectJobOrder = (state: any) =>
  state?.jobOrder?.jobOrder as JobOrderStoreType;

export const useJobOrderSelector = () => {
  return useSelector(selectJobOrder);
};
