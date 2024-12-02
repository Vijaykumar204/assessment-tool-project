
const initialState = {
  questions: [
    {
      questionText: '',
      options: ['', '', '', ''], // Assuming 4 options by default
      answer: ''
    }
  ],
  timeLeft: 600, // Example time left in seconds
  showPopup: false,
  showCancelModal: false,
  error: null,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TIME_LEFT':
      return { ...state, timeLeft: action.payload };
    case 'ADD_QUESTION':
      return {
        ...state,
        questions: [...state.questions, { questionText: '', options: ['', '', '', ''], answer: '' }],
      };
    case 'UPDATE_QUESTION':
      const updatedQuestions = [...state.questions];
      updatedQuestions[action.payload.index][action.payload.field] = action.payload.value;
      return { ...state, questions: updatedQuestions };
    case 'UPDATE_OPTION':
      const updatedOptQuestions = [...state.questions];
      updatedOptQuestions[action.payload.qIndex].options[action.payload.oIndex] = action.payload.value;
      return { ...state, questions: updatedOptQuestions };
    case 'DELETE_QUESTION':
      return {
        ...state,
        questions: state.questions.filter((_, index) => index !== action.payload.index),
      };
    case 'SAVE_QUESTIONS':
      return { ...state, questions: action.payload, showPopup: true };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SHOW_CANCEL_MODAL':
      return { ...state, showCancelModal: true };
    case 'HIDE_CANCEL_MODAL':
      return { ...state, showCancelModal: false };
    case 'HIDE_POPUP':
      return { ...state, showPopup: false };
    default:
      return state;
  }
};

export default quizReducer;
