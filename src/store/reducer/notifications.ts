import {Action, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

// init states
const initState = {
  notifications: [],
};

export interface NotificationsType {
  id: string;
  title: string;
  content: string;
  additionalData: any;
  date: string;
}
// reducer
const notification = createSlice({
  name: 'notification',
  initialState: initState as {notifications: NotificationsType[]},
  reducers: {
    addNotification(state, action: PayloadAction<NotificationsType[]>) {
      state.notifications = action.payload;
    },
    clearNotifications(state) {
      state.notifications = [];
    },
  },
});

export default notification.reducer;

export const {addNotification, clearNotifications} = notification.actions;

const selectNotification = (state: any) =>
  state?.notification?.notifications as NotificationsType[];

export const useNotifications = () => {
  return useSelector(selectNotification) as NotificationsType[];
};
