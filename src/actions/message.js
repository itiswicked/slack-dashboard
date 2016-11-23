export const TOGGLE_FORM_ACTIVE = 'TOGGLE_FORM_ACTIVE';

export const toggleFormActive = id => {
  return {
    type: TOGGLE_FORM_ACTIVE,
    id
  }
};
