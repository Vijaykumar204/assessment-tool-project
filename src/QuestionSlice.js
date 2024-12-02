import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  // other state
};

const QuestionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    deleteQuestion(state, action) {
      state.questions = state.questions.filter((_, index) => index !== action.payload);
    },
    setQuestionForView(state, action) {
      // Set question for view
    },
  },
});

export const { setQuestions, deleteQuestion, setQuestionForView } = QuestionSlice.actions;
export default QuestionSlice.reducer;
