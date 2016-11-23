import { POST_NEW_MESSAGE_TYPE } from './../actions/postNewMessageType';

let initialState = {
  items: [
    { name: 'Morning Greetings', id: 1 }
  ]
}

const messageTypes = (state = initialState, action) => {
  switch(action.type) {
    case POST_NEW_MESSAGE_TYPE:
      let newId = state.items[state.items.length - 1].id + 1;
      let newItem = { name: action.item.name, id: newId };
      let newItems = [ ...state.items, newItem ];
      return Object.assign({}, state, { items: newItems });
    default:
     return state;
  }
};

export default messageTypes;
