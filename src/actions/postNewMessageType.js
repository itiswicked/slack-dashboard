export const POST_NEW_MESSAGE_TYPE = 'POST_NEW_MESSAGE_TYPE';

const postNewMessageType = item => ({
  type: POST_NEW_MESSAGE_TYPE,
  item
});

export { postNewMessageType }
