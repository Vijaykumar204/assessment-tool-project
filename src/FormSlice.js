

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  form: {
    testName: '',
    testCategory: '',
    subCategory: '',
    testDate: '',
    description: ''
  },
  errors: {},
  questions: [], // Ensure questions is an empty array
  questionForView: null
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // setForm(state, action) {
    //   state.form[action.payload.id] = action.payload.value;
    // },
    setForm(state, action) {
      if (action.payload.id) {
        // Update specific field
        state.form[action.payload.id] = action.payload.value;
      } else {
        // Reset or set the entire form object
        state.form = action.payload;
      }
    },

    setErrors(state, action) {
      state.errors = action.payload;
    },
    clearErrors(state) {
      state.errors = {};
    },
    addQuestion(state) {
      state.questions.push(state.form);
      state.form = initialState.form; // Clear form after adding
    },
    deleteQuestion(state, action) {
      state.questions = state.questions.filter((_, index) => index !== action.payload);
    },
    setQuestionForView(state, action) {
      state.questionForView = action.payload;
    }
  }
});

export const { setForm, setErrors, clearErrors, addQuestion, deleteQuestion, setQuestionForView } = formSlice.actions;

export default formSlice.reducer;

