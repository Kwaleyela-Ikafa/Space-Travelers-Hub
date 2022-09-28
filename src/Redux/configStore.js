import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './Missions/missions';
import rocketsReducer from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    missionsReducer,
    rockets: rocketsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});
export default store;
