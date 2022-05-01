import { createStore, compose, combineReducers } from 'redux';
import { ProfileState } from 'src/store/profile/reducer';
import { profileReducer } from 'src/store/profile/reducer';
import { dialoguesReducer, DialoguesState } from 'src/store/dialogues/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface StoreState {
  profile: ProfileState;
  dialogues: DialoguesState;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers<StoreState>({
    profile: profileReducer,
    dialogues: dialoguesReducer,
  }),
  composeEnhancers()
);
