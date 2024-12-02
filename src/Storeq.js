
// import { createStore, combineReducers } from "redux";
// import quizReducer from "./QuizReducer"; // Ensure the path and name match
// import userReducer from "./UserSlice";
// import quizResultsReducer from "./QuizResultsSlice";
// import FormReducer from "./FormSlice";
// import feedbackReducer from "./Feedbackreducer"; // Ensure the path is correct

// const rootReducer = combineReducers({
//   quiz: quizReducer,
//   users: userReducer,
//   quizResults: quizResultsReducer,
//   form: FormReducer,
//   feedback: feedbackReducer, // Correct key for feedbackReducer
// });

// const store = createStore(rootReducer);

// export default store;
import { createStore, combineReducers } from "redux";
import quizReducer from "./QuizReducer";
import userReducer from "./UserSlice";
import quizResultsReducer from "./QuizResultsSlice";
import FormReducer from "./FormSlice";
import feedbackReducer from "./Feedbackreducer"; // Correct path

const rootReducer = combineReducers({
  quiz: quizReducer,
  users: userReducer,
  quizResults: quizResultsReducer,
  form: FormReducer,
  feedback: feedbackReducer, // Correct key
});

const store = createStore(rootReducer);

export default store;
