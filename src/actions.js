// export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
// export const SUBMIT_FEEDBACK = 'SUBMIT_FEEDBACK';
// export const RESET_FEEDBACK = 'RESET_FEEDBACK';

// export const updateFeedback = (field, value) => ({
//   type: UPDATE_FEEDBACK,
//   payload: { field, value },
// });

// export const submitFeedback = (firstName,lastName,feedback) => ({
//   type: SUBMIT_FEEDBACK,
//   payload: {firstName,lastName,feedback},
// });
// Action Types
export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export const SUBMIT_FEEDBACK = 'SUBMIT_FEEDBACK';
export const RESET_FEEDBACK = 'RESET_FEEDBACK';

// Action Creators

// Action to update feedback field
export const updateFeedback = (field, value) => ({
  type: UPDATE_FEEDBACK,
  payload: { field, value },
});

// Action to submit feedback
export const submitFeedback = (feedback) => ({
  type: SUBMIT_FEEDBACK,
  payload: feedback,
});

// Action to reset feedback form
// export const resetFeedback = () => ({
//   type: RESET_FEEDBACK,
// });

