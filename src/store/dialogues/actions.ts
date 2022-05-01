import { AddChat, AddMessage, DeleteChat } from 'src/store/dialogues/types';

export const ADD_CHAT = 'DIALOGUES::ADD_CHAT';
export const addChat: AddChat = (chatName) => ({
  type: ADD_CHAT,
  chatName,
});

export const DELETE_CHAT = 'DIALOGUES::DELETE_CHAT';
export const deleteChat: DeleteChat = (chatId) => ({
  type: DELETE_CHAT,
  chatId,
});

export const ADD_MESSAGE = 'DIALOGUES::ADD_MESSAGE';
export const addMessage: AddMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});
