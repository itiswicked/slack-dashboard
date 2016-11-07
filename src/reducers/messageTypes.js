import { POST_NEW_MESSAGE_TYPE } from './../actions/postNewMessageType';

let initialState = {
  items: []
}

const messageTypes = (state = initialState, action) => {
  switch(action.type) {
    case POST_NEW_MESSAGE_TYPE:
      let newItems = [ ...state.items, action.item ]
      return Object.assign({}, state, { items: newItems });
    default:
     return state;
  }
};

export default messageTypes;
