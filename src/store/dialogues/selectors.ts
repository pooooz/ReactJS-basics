import { nanoid } from 'nanoid';
import { StoreState } from '../index';

export const selectChatList = (state: StoreState) =>
  Object.entries(state.dialogues).map((chat) => ({
    id: nanoid(),
    name: chat[0],
  }));

export const selectChats = (state: StoreState) => state.dialogues;
