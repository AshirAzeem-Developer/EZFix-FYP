import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
// import userReducer from './user/slice';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

// reducers
import settings from './reducer/settings';
import user from './reducer/user';
import jobOrder from './reducer/job-order';
import notification from './reducer/notifications';
import locale from './reducer/locale';

// config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['settings', 'user', 'notification', 'locale'],
};

const rootReducer = combineReducers({
  settings: settings,
  user: user,
  JobOrder: jobOrder,
  notification: notification,
  locale: locale,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

//  root reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
