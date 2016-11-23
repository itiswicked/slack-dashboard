import { POST_NEW_MESSAGE } from './../actions/postNewMessage';
import { TOGGLE_FORM_ACTIVE } from './../actions/message';
let initialState = {
  items: []
}

const messages = (state = initialState, action) => {
  switch(action.type) {
    case POST_NEW_MESSAGE:
      let nextId = 0;
      if(state.items[state.items.length -1]) {
        nextId = state.items[state.items.length - 1].id + 1;
      }
      let newMessage = Object.assign({}, action.item, {
        id: nextId, formActive: false
      });
      let newMessages = [ ...state.items, newMessage ];
      return Object.assign({}, state, {items: newMessages });
    case TOGGLE_FORM_ACTIVE:
      let newItems = state.items.map(message => {
        if(action.messageId === message.id) {
          return Object.assign({}, message, {
            formActive: !message.formActive
          });
        } else {
          return message;
        }
      });
      return Object.assign({}, state, {items: newMessages });
    default:
      return state;
  }
}

export default messages;
