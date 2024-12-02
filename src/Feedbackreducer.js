// import {  SUBMIT_FEEDBACK } from "./actions";

// const initialState = {
//   submissions: [], // Store the list of feedback submissions
// };

// const feedbackReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SUBMIT_FEEDBACK:
//       return {
//         ...state,
//         submissions: [...state.submissions, action.payload], // Add new submission
//       };
//     default:
//       return state;
//   }
// };

// export default feedbackReducer;
import { SUBMIT_FEEDBACK } from './actions';

const initialState = {
  submissions: [], // Store the list of feedback submissions
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FEEDBACK:
      return {
        ...state,
        submissions: [...state.submissions, action.payload], // Add new submission
      };
    default:
      return state;
  }
};

export default feedbackReducer;

