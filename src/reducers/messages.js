import { POST_NEW_MESSAGE, PATCH_MESSAGE } from './../actions/message';

let initialState = {
  items: [{
    body: 'Hey @channel, I\'m here to answer your questions until 12 PM EST! Tag me w/ @itiswicked to get my attention!',
    teamId: 1,
    id: 1
  }]
}

const messages = (state = initialState, action) => {
  switch(action.type) {
    case POST_NEW_MESSAGE:
      let nextId = 1;
      if(state.items[state.items.length - 1]) {
        nextId = state.items[state.items.length - 1].id + 1;
      }
      let newMessage = {
        body: action.body,
        teamId: action.teamId,
        id: nextId
      };
      let newMessages = [ ...state.items, newMessage ];
      return Object.assign({}, state, { items: newMessages });
    case PATCH_MESSAGE:
    console.log(action.message.body);
      let newlyPatchedMesssages = state.items.map(message => {
        return message.id === action.message.id ? action.message : message;
      })

      return Object.assign({}, state, {
        items: newlyPatchedMesssages
      })
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
