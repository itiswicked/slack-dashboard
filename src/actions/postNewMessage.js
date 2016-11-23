export const POST_NEW_MESSAGE = 'POST_NEW_MESSAGE';

const postNewMessage = item => ({
  type: POST_NEW_MESSAGE,
  item
});

export { postNewMessage }
