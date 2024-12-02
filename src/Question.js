


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Container, Button, Modal, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import ryt from "./image/logoimg.png";

// const Question = () => {
//   const dispatch = useDispatch();
//   const { timeLeft, questions, showPopup, showCancelModal, error } = useSelector(state => state.quiz);
//   const navigate = useNavigate();

//   const handleAddQuestion = () => {
//     dispatch({ type: 'ADD_QUESTION' });
//   };

//   const handleSaveQuestions = () => {
//     const validQuestions = questions.filter(q =>
//       q.questionText.trim() !== '' &&
//       q.options.every(opt => opt.trim() !== '') &&
//       q.answer.trim() !== ''
//     );

//     if (validQuestions.length === 0) {
//       dispatch({ type: 'SET_ERROR', payload: "Please fill out at least one question" });
//       return;
//     }

//     const invalidQuestions = questions.some(q =>
//       !q.options.includes(q.answer)
//     );

//     if (invalidQuestions) {
//       dispatch({ type: 'SET_ERROR', payload: "Each answer must match one of the options" });
//       return;
//     }

//     dispatch({ type: 'SAVE_QUESTIONS', payload: validQuestions });
//     dispatch({ type: 'SHOW_POPUP' });
//   };

//   const handleQuestionChange = (index, field, value) => {
//     dispatch({ type: 'UPDATE_QUESTION', payload: { index, field, value } });
//   };

//   const handleOptionChange = (qIndex, oIndex, value) => {
//     dispatch({ type: 'UPDATE_OPTION', payload: { qIndex, oIndex, value } });
//   };

//   const handleDeleteQuestion = (index) => {
//     dispatch({ type: 'DELETE_QUESTION', payload: { index } });
//   };

//   const handleClose = () => {
//     dispatch({ type: 'HIDE_POPUP' });
//     navigate('/Viewquestion');
//   };

//   const handleClose1 = () => {
//     dispatch({ type: 'HIDE_POPUP' });
//     navigate('/Educator');
//   };

//   return (
//     <Container className="mt-5">
//       <div className="container-fluid d-flex justify-content-between align-items-center mb-4" style={{ backgroundColor: '#45A29E' }}>
//         <img src={ryt} alt="Logo" width="100px" />
//         <h3 className="text-center" style={{ color: 'whitesmoke' }}>QUIZ CREATION</h3>
//         <Button variant="light" onClick={() => dispatch({ type: 'SHOW_CANCEL_MODAL' })} className="shadow-sm">Cancel Test</Button>
//       </div>
//       <div className="right-contain text-white rounded p-4 shadow" style={{ backgroundColor: 'lightgray' }}>
//         <div className="mt-4">
//           {error && <p id="error" style={{ color: 'red' }}>{error}</p>}
//           <div id="questions-container">
//             {questions.map((question, qIndex) => (
//               <div key={qIndex} className="question-section bg-white p-3 rounded mb-3 shadow-sm">
//                 <h5>Question {qIndex + 1}</h5> {/* Add question number here */}
//                 <Form.Control
//                   type="text"
//                   className="question-input mb-2"
//                   placeholder="Enter Question"
//                   value={question.questionText}
//                   style={{ height: 70 }}
//                   onChange={(e) => handleQuestionChange(qIndex, 'questionText', e.target.value)}
//                 />
//                 <div className="options-container">
//                   {question.options.map((option, oIndex) => (
//                     <Form.Control
//                       key={oIndex}
//                       type="text"
//                       className="option-input mb-2"
//                       placeholder={`Option ${oIndex + 1}`}
//                       value={option}
//                       onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
//                     />
//                   ))}
//                 </div>
//                 <Form.Control
//                   type="text"
//                   className="answer-input"
//                   placeholder="Answer"
//                   value={question.answer}
//                   onChange={(e) => handleQuestionChange(qIndex, 'answer', e.target.value)}
//                 />
//                 {(qIndex !== 0 || questions.length > 1) && (
//                   <Button variant="danger" className="mt-2" onClick={() => handleDeleteQuestion(qIndex)}>Delete Question</Button>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="d-flex justify-content-between">
//             <Button id="add-question-btn" variant="success" onClick={handleAddQuestion}>Add Question</Button>
//             <Button style={{ backgroundColor: "#45A29E", border: 'none' }} onClick={handleSaveQuestions}>Submit</Button>
//           </div>
//         </div>
//       </div>

//       {/* Success Popup Modal */}
//       <Modal show={showPopup} onHide={() => dispatch({ type: 'HIDE_POPUP' })}>
//         <Modal.Header closeButton>
//           <Modal.Title>Success</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Questions have been successfully saved!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="success" onClick={handleClose}>OK</Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Cancel Test Modal */}
//       <Modal show={showCancelModal} onHide={() => dispatch({ type: 'HIDE_CANCEL_MODAL' })}>
//         <Modal.Header closeButton>
//           <Modal.Title>Cancel Quiz</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to cancel?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => dispatch({ type: 'HIDE_CANCEL_MODAL' })}>No</Button>
//           <Button variant="primary" onClick={handleClose1}>Yes</Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default Question;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ryt from "./image/logoimg.png";

const Question = () => {
  const dispatch = useDispatch();
  const { timeLeft, questions, showPopup, showCancelModal, error } = useSelector(state => state.quiz);
  const navigate = useNavigate();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleAddQuestion = () => {
    dispatch({ type: 'ADD_QUESTION' });
  };

  const handleSaveQuestions = () => {
    const validQuestions = questions.filter(q =>
      q.questionText.trim() !== '' &&
      q.options.every(opt => opt.trim() !== '') &&
      q.answer.trim() !== ''
    );

    if (validQuestions.length === 0) {
      dispatch({ type: 'SET_ERROR', payload: "Please fill out at least one question" });
      return;
    }

    const invalidQuestions = questions.some(q =>
      !q.options.includes(q.answer)
    );

    if (invalidQuestions) {
      dispatch({ type: 'SET_ERROR', payload: "Each answer must match one of the options" });
      return;
    }

    dispatch({ type: 'SAVE_QUESTIONS', payload: validQuestions });
    dispatch({ type: 'SHOW_POPUP' });
  };

  const handleQuestionChange = (index, field, value) => {
    dispatch({ type: 'UPDATE_QUESTION', payload: { index, field, value } });
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    dispatch({ type: 'UPDATE_OPTION', payload: { qIndex, oIndex, value } });
  };

  const handleDeleteQuestion = (index) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    dispatch({ type: 'DELETE_QUESTION', payload: { index: deleteIndex } });
    setShowDeleteModal(false);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleClose = () => {
    dispatch({ type: 'HIDE_POPUP' });
    navigate('/Viewquestion');
  };

  const handleClose1 = () => {
    dispatch({ type: 'HIDE_POPUP' });
    navigate('/Educator');
  };

  return (
    <Container className="mt-5">
      <div className="container-fluid d-flex justify-content-between align-items-center mb-4" style={{ backgroundColor: '#45A29E' }}>
        <img src={ryt} alt="Logo" width="100px" />
        <h3 className="text-center" style={{ color: 'whitesmoke' }}>QUIZ CREATION</h3>
        <Button variant="light" onClick={() => dispatch({ type: 'SHOW_CANCEL_MODAL' })} className="shadow-sm">Cancel Test</Button>
      </div>
      <div className="right-contain text-white rounded p-4 shadow" style={{ backgroundColor: 'lightgray' }}>
        <div className="mt-4">
          {error && <p id="error" style={{ color: 'red' }}>{error}</p>}
          <div id="questions-container">
            {questions.map((question, qIndex) => (
              <div key={qIndex} className="question-section bg-white p-3 rounded mb-3 shadow-sm">
                <h5>Question {qIndex + 1}</h5> {/* Add question number here */}
                <Form.Control
                  type="text"
                  className="question-input mb-2"
                  placeholder="Enter Question"
                  value={question.questionText}
                  style={{ height: 70 }}
                  onChange={(e) => handleQuestionChange(qIndex, 'questionText', e.target.value)}
                />
                <div className="options-container">
                  {question.options.map((option, oIndex) => (
                    <Form.Control
                      key={oIndex}
                      type="text"
                      className="option-input mb-2"
                      placeholder={`Option ${oIndex + 1}`}
                      value={option}
                      onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                    />
                  ))}
                </div>
                <Form.Control
                  type="text"
                  className="answer-input"
                  placeholder="Answer"
                  value={question.answer}
                  onChange={(e) => handleQuestionChange(qIndex, 'answer', e.target.value)}
                />
                {(qIndex !== 0 || questions.length > 1) && (
                  <Button variant="danger" className="mt-2" onClick={() => handleDeleteQuestion(qIndex)}>Delete Question</Button>
                )}
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between">
            <Button id="add-question-btn" variant="success" onClick={handleAddQuestion}>Add Question</Button>
            <Button style={{ backgroundColor: "#45A29E", border: 'none' }} onClick={handleSaveQuestions}>Submit</Button>
          </div>
        </div>
      </div>

      {/* Success Popup Modal */}
      <Modal show={showPopup} onHide={() => dispatch({ type: 'HIDE_POPUP' })}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Questions have been successfully saved!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>OK</Button>
        </Modal.Footer>
      </Modal>

      {/* Cancel Test Modal */}
      <Modal show={showCancelModal} onHide={() => dispatch({ type: 'HIDE_CANCEL_MODAL' })}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to cancel?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: 'HIDE_CANCEL_MODAL' })}>No</Button>
          <Button variant="primary" onClick={handleClose1}>Yes</Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this question?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>Close</Button>
          <Button variant="danger" onClick={confirmDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Question;
