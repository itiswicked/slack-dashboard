import { POST_NEW_MESSAGE } from './../actions/postNewMessage';
// import { CHANGE_ACTIVE_FORM } from './../actions/message';

let initialState = {
  items: [],
  activeFormId: 0
}

const messages = (state = initialState, action) => {
  switch(action.type) {
    case POST_NEW_MESSAGE:
      let nextId = 0;
      if(state.items[state.items.length - 1]) {
        nextId = state.items[state.items.length - 1].id + 1;
      }
      let newMessage = Object.assign({}, action.item, {
        id: nextId
      });
      let newMessages = [ ...state.items, newMessage ];
      return Object.assign({}, state, { items: newMessages });
    default:
      return state;
  }
}

const grabTextForActiveForm = (state, id) => {
  let message = state.messages.items.find(m => m.id === id);
  return message ? message.message : null;
}

export default messages;
export { grabTextForActiveForm };
