
// import { createSlice } from '@reduxjs/toolkit';

// export const quizResultsSlice = createSlice({
//   name: 'quizResults',
//   initialState: {
//     totalQuestions: 0,
//     correctAnswers: 0,
//   },
//   reducers: {
//     setResults: (state, action) => {
//       state.totalQuestions = action.payload.totalQuestions;
//       state.correctAnswers = action.payload.correctAnswers;
//     },
//   },
// });

// export const { setResults } = quizResultsSlice.actions;
// export default quizResultsSlice.reducer;
// QuizResultsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const QuizResultsSlice = createSlice({
  name: 'quizResults',
  initialState: {
    totalQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    selectedOptions: {},
    questions: []
  },
  reducers: {
    setResults: (state, action) => {
      const { totalQuestions, correctAnswers, wrongAnswers, selectedOptions, questions } = action.payload;
      state.totalQuestions = totalQuestions;
      state.correctAnswers = correctAnswers;
      state.wrongAnswers = wrongAnswers;
      state.selectedOptions = selectedOptions;
      state.questions = questions;
    }
  }
});

export const { setResults } = QuizResultsSlice.actions;
export default QuizResultsSlice.reducer;

