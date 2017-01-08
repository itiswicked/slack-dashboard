export const POST_NEW_MESSAGE = 'POST_NEW_MESSAGE';

export const postNewMessage = (teamId, body) => ({
  type: POST_NEW_MESSAGE,
  teamId,
  body
});
