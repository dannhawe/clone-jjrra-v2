import  LoginReducer  from './Slice/LoginSlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  ProjectAll  from './Slice/ProjectSlice';

export const store = configureStore({
  reducer: {
    LoginReducer,
    ProjectAll
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
