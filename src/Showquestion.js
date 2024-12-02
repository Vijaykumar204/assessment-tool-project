
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { deleteQuestion, setQuestionForView } from './FormSlice';
// import { Container, Col, Row } from 'react-bootstrap';
// import Dashboard from './Dashboard';
// import DashHeader from './DashHeader';

// const Showquestion = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Ensure questions is an array
//   const questions = useSelector(state => state.form.questions || []);

//   const handleView = (index) => {
//     dispatch(setQuestionForView(questions[index]));
//     navigate('/Viewquestion');
//   };

//   const handleDelete = (index) => {
//     dispatch(deleteQuestion(index));
//   };

//   return (
//     <>
//       <DashHeader />
//       <Container fluid>
//         <Row>
//           <Col md={2} className="sidebar" style={{ backgroundColor: "#45A29E" }}>
//             <Dashboard />
//           </Col>
//           <Col md={10} className="main-content">
//             <div className="container mt-2">
//               <div className="row justify-content-center">
//                 <div>
//                   <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
//                     <h2 className="text-center mb-4">View Question</h2>
//                     <div className="table-responsive">
//                       <table className="table table-striped" style={{ width: '100%' }}>
//                         <thead>
//                           <tr>
//                             <th>#</th>
//                             <th>Assessment Name</th>
//                             <th>Assessment Module</th>
//                             <th>Batch No</th>
//                             <th>Test Date</th>
//                             <th>Timing</th>
//                             <th>Actions</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {questions.length > 0 ? (
//                             questions.map((question, index) => (
//                               <tr key={index}>
//                                 <td>{index + 1}</td> {/* Add question number here */}
//                                 <td>{question.testName}</td>
//                                 <td>{question.testCategory}</td>
//                                 <td>{question.subCategory}</td>
//                                 <td>{question.testDate}</td>
//                                 <td>{question.description}</td>
//                                 <td>
//                                   <button className="btn btn-info btn-sm me-2 p-2" onClick={() => handleView(index)} id="buttoncolor">View</button>
//                                   <button className="btn btn-danger btn-sm p-2" onClick={() => handleDelete(index)}>Delete</button>
//                                 </td>
//                               </tr>
//                             ))
//                           ) : (
//                             <tr>
//                               <td colSpan="7" className="text-center">No questions available</td> {/* Adjust colSpan to 7 */}
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Showquestion;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteQuestion, setQuestionForView } from './FormSlice';
import { Container, Col, Row, Modal, Button } from 'react-bootstrap';
import Dashboard from './Dashboard';
import DashHeader from './DashHeader';

const Showquestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Ensure questions is an array
  const questions = useSelector(state => state.form.questions || []);

  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleView = (index) => {
    dispatch(setQuestionForView(questions[index]));
    navigate('/Viewquestion');
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
    setShowModal(true);
  };

  const confirmDelete = () => {
    dispatch(deleteQuestion(deleteIndex));
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <DashHeader />
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar" style={{ backgroundColor: "#45A29E" }}>
            <Dashboard />
          </Col>
          <Col md={10} className="main-content">
            <div className="container mt-2">
              <div className="row justify-content-center">
                <div>
                  <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                    <h2 className="text-center mb-4">View Question</h2>
                    <div className="table-responsive">
                      <table className="table table-striped" style={{ width: '100%' }}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Assessment Name</th>
                            <th>Assessment Module</th>
                            <th>Batch No</th>
                            <th>Test Date</th>
                            <th>Timing</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {questions.length > 0 ? (
                            questions.map((question, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td> {/* Add question number here */}
                                <td>{question.testName}</td>
                                <td>{question.testCategory}</td>
                                <td>{question.subCategory}</td>
                                <td>{question.testDate}</td>
                                <td>{question.description}</td>
                                <td>
                                  <button className="btn btn-info btn-sm me-2 p-2" onClick={() => handleView(index)} id="buttoncolor">View</button>
                                  <button className="btn btn-danger btn-sm p-2" onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="7" className="text-center">No questions available</td> {/* Adjust colSpan to 7 */}
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal for delete confirmation */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this question?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Showquestion;
