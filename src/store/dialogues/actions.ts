import { AddChat, AddMessage, DeleteChat, Message } from './types';
import { Dispatch } from 'redux';

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

let timeout: NodeJS.Timeout;
export const addMessageWithReply =
  (chatId: string, message: Message) =>
  (dispatch: Dispatch<ReturnType<AddMessage>>) => {
    dispatch(addMessage(chatId, message));

    if (message.author !== 'BOT') {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        dispatch(
          addMessage(chatId, {
            text: 'Message',
            author: 'BOT',
          })
        );
      }, 1500);
    }
  };
