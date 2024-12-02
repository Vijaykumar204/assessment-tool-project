

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, Link } from 'react-router-dom';
// import { deleteQuestion, setQuestionForView } from './FormSlice';
// import { Container, Col, Row, Card, Button } from 'react-bootstrap';
// import Dashboard from './Dashboard';
// import DashHeader from './DashHeader';


// const Showquestion = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Ensure questions is an array
//   const questions = useSelector(state => state.form.questions || []);
//   const submissions = useSelector((state) => state.feedback.submissions);

//   const handleView = (index) => {
//     dispatch(setQuestionForView(questions[index]));
//     navigate('/Viewquestion');
//   };

//   const handleDelete = (index) => {
//     dispatch(deleteQuestion(index));
//   };
//   const handlestatus = (index) => {
//     // dispatch(setQuestionForView(questions[index]));
//     navigate('/Submitquestion');
//   };
//   const handlecreate = () => {
//     // dispatch(setQuestionForView(questions[index]));
//     navigate('/Basicdetails');
//   };

//   return (
//     <>
//       <DashHeader />
//       <Container fluid>
//         <Row>
//           <Col md={2} className="sidebar" style={{ backgroundColor: "#45A29E" }}>
//             <Dashboard />
//           </Col>
//           <Col md={10} className="main-content" >
//             <div className="container mt-2">
//               <div className="row justify-content-center">
//                 <div>
//                   <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
//                     {/* <h2 className="text-center mb-4">Dashboard</h2>
//                     <Button variant="primary" className="ml-auto align-items-end">Action Button</Button> */}
//                     <div className="d-flex justify-content-between align-items-center mb-4">
//                       <h1 className="text-center">Dashboard</h1>
//                      <Button  className="ml-auto" id='buttoncolor'  onClick={handlecreate}>+ Create</Button> 
//                    </div>
//                     <Row>
                    
//                       <h4 style={{ marginBottom: '15px' }}>View Assessment</h4>
//                       <Col md={6} lg={4} className="mb-4">
//                         <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
//                           <Card.Body>
//                             <Card.Title style={{ textAlign: 'center' }}>View Assessment</Card.Title>
//                             <Card.Text>
//                               <strong>Assessment Name:</strong> Java<br />
//                               <strong>Assessment Module:</strong> Object<br />
//                               <strong>Batch Name:</strong> First batch<br />
//                               <strong>Test Date:</strong> 2024-07-20<br />
//                               <strong>Timing:</strong> 200
//                             </Card.Text>
//                             <Button 
//                               variant="info" 
//                               onClick={() => handleView()} 
//                               className="btn-sm me-2"
//                               id="buttoncolor"
//                             >
//                               View
//                             </Button>
//                             <Button 
//                               variant="danger" 
//                               onClick={() => handleDelete()} 
//                               className="btn-sm"
//                             >
//                               Delete
//                             </Button>
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                       <Col md={6} lg={4} className="mb-4">
//                         <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
//                           <Card.Body>
//                             <Card.Title style={{ textAlign: 'center' }}>View Assessment</Card.Title>
//                             <Card.Text>
//                               <strong>Assessment Name:</strong> React<br />
//                               <strong>Assessment Module:</strong> Redux<br />
//                               <strong>Batch Name:</strong> Second<br />
//                               <strong>Test Date:</strong> 2024-07-23<br />
//                               <strong>Timing:</strong> vdv
//                             </Card.Text>
//                             <Button 
//                               variant="info" 
//                               onClick={() => handleView()} 
//                               className="btn-sm me-2"
//                               id="buttoncolor"
//                             >
//                               View
//                             </Button>
//                             <Button 
//                               variant="danger" 
//                               onClick={() => handleDelete()} 
//                               className="btn-sm"
//                             >
//                               Delete
//                             </Button>
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                       {questions.length > 0 ? (
//                         questions.map((question, index) => (
//                           <Col key={index} md={6} lg={4} className="mb-4">
//                             <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
//                               <Card.Body>
//                                 <Card.Title style={{ textAlign: 'center' }}>View Assessment</Card.Title>
//                                 <Card.Text>
//                                   <strong>Assessment Name:</strong> {question.testName}<br/>
//                                   <strong>Assessment Module:</strong> {question.testCategory}<br/>
//                                   <strong>Batch Name:</strong> {question.subCategory}<br />
//                                   <strong>Test Date:</strong> {question.testDate}<br />
//                                   <strong>Timing:</strong> {question.description}
//                                 </Card.Text>
//                                 <Button 
//                                   variant="info" 
//                                   onClick={() => handleView(index)} 
//                                   className="btn-sm me-2"
//                                   id="buttoncolor"
//                                 >
//                                   View
//                                 </Button>
//                                 <Button 
//                                   variant="danger" 
//                                   onClick={() => handleDelete(index)} 
//                                   className="btn-sm"
//                                 >
//                                   Delete
//                                 </Button>
//                               </Card.Body>
//                             </Card>
//                           </Col>
//                         ))
//                       ) : (
//                         <Col>
//                           {/* <p className="text-center">No questions available</p> */}
//                         </Col>
//                       )}
//                     </Row>
//                     <Row>
//                     <h4 style={{ marginBottom: '15px' }}>Assessment Status</h4>
//                       <Col md={6} lg={4} className="mb-4">
//                         <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
//                           <Card.Body>
//                             <Card.Title style={{ textAlign: 'center' }}>View Status</Card.Title>
//                             <Card.Text>
//                             <strong>Name:</strong> Vijaykumar<br/>
//                                   <strong>Assessment Name:</strong>Java<br/>
                                  
//                             </Card.Text>
//                             <Button 
//                               variant="info" 
//                               onClick={() => handlestatus()} 
//                               className="btn-sm me-2"
//                               id="buttoncolor"
//                             >
//                             view
//                             </Button>
                           
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                       <Col md={6} lg={4} className="mb-4">
//                         <Card style={{ width: '80%', backgroundColor:'lightgray'}}>
//                           <Card.Body>
//                             <Card.Title style={{ textAlign: 'center' }}>View Status</Card.Title>
//                             <Card.Text>
//                             <strong>Name:</strong> Vijay<br/>
//                                   <strong>Assessment Name:</strong>React<br/>
                                  
//                             </Card.Text>
//                             <Button 
//                               variant="info" 
//                               onClick={() => handlestatus()} 
//                               className="btn-sm me-2"
//                               id="buttoncolor"
//                             >
//                               View
//                             </Button>
                            
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                       {submissions.length > 0 ? (
//                         submissions.map((submission, index) => (
//                           <Col key={index} md={6} lg={4} className="mb-4">
//                             <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
//                               <Card.Body>
//                                 <Card.Title>View Status</Card.Title>
//                                 <Card.Text>
//                                   <strong>Name:</strong> {submission.firstName}<br/>
//                                   <strong>Assessment Name:</strong> {submission.lastName}<br/>
                                 
//                                 </Card.Text>
//                                 <Button 
//                                   variant="info" 
//                                   onClick={() => handlestatus(index)} 
//                                   className="btn-sm me-2"
//                                   id="buttoncolor"
//                                 >
//                                   View
//                                 </Button>
//                               </Card.Body>
//                             </Card>
//                           </Col>
//                         ))
//                       ) : (
//                         <Col>
//                           {/* <p className="text-center">No feedback submitted yet</p> */}
//                         </Col>
//                       )}
//                     </Row>

//                     <Row>
//                     <h4 style={{ marginBottom: '15px' }}>Assessment Feedback</h4>
//                       <Col md={6} lg={4} className="mb-4">
//                         <Card style={{ width: '80%',backgroundColor:'lightgray' }}>
//                           <Card.Body>
//                             <Card.Title style={{ textAlign: 'center' }}>Feedback</Card.Title>
//                             <Card.Text>
//                             <strong>Name:</strong> Vijaykumar<br/>
//                                   <strong>Assessment Name:</strong>Java<br/>
//                                   <strong>Feedback:</strong>Question easy
//                             </Card.Text>
//                             <Button 
//                               variant="info" 
//                               // onClick={() => handleView()} 
//                               className="btn-sm me-2"
//                               id="buttoncolor"
//                             >
//                             Send
//                             </Button>
                           
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                       <Col md={6} lg={4} className="mb-4">
//                         <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
//                           <Card.Body>
//                             <Card.Title style={{ textAlign: 'center' }}>View Assessment</Card.Title>
//                             <Card.Text>
//                             <strong>Name:</strong> Vijay<br/>
//                                   <strong>Assessment Name:</strong>React<br/>
//                                   <strong>Feedback:</strong>Time Constrain
//                             </Card.Text>
//                             <Button 
//                               variant="info" 
                             
//                               className="btn-sm me-2"
//                               id="buttoncolor"
//                             >
//                               Send
//                             </Button>
                            
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                       {submissions.length > 0 ? (
//                         submissions.map((submission, index) => (
//                           <Col key={index} md={6} lg={4} className="mb-4">
//                             <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
//                               <Card.Body>
//                                 <Card.Title>Feedback</Card.Title>
//                                 <Card.Text>
//                                   <strong>Name:</strong> {submission.firstName}<br/>
//                                   <strong>Assessment Name:</strong> {submission.lastName}<br/>
//                                   <strong>Feedback:</strong> {submission.feedback}<br />
//                                 </Card.Text>
//                                 <Button 
//                                   variant="info" 
//                                   className="btn-sm me-2"
//                                   id="buttoncolor"
//                                 >
//                                   Send
//                                 </Button>
//                               </Card.Body>
//                             </Card>
//                           </Col>
//                         ))
//                       ) : (
//                         <Col>
//                           {/* <p className="text-center">No feedback submitted yet</p> */}
//                         </Col>
//                       )}
//                     </Row>
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
import { useNavigate, Link } from 'react-router-dom';
import { deleteQuestion, setQuestionForView } from './FormSlice';
import { Container, Col, Row, Card, Button, Modal } from 'react-bootstrap';
import Dashboard from './Dashboard';
import DashHeader from './DashHeader';


const Showquestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
const [deleteIndex, setDeleteIndex] = useState(null);

  // Ensure questions is an array
  const questions = useSelector(state => state.form.questions || []);
  const submissions = useSelector((state) => state.feedback.submissions);

  const handleView = (index) => {
    dispatch(setQuestionForView(questions[index]));
    navigate('/Viewquestion');
  };

  // const handleDelete = (index) => {
  //   dispatch(deleteQuestion(index));
  // };
  const handlestatus = (index) => {
    // dispatch(setQuestionForView(questions[index]));
    navigate('/Submitquestion');
  };
  const handlecreate = () => {
    // dispatch(setQuestionForView(questions[index]));
    navigate('/Basicdetails');
  };
  const handleDelete = (index) => {
    setDeleteIndex(index);
    setShowModal(true);
    // dispatch(deleteQuestion(index));
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
          <Col md={10} className="main-content" >
            <div className="container mt-2">
              <div className="row justify-content-center">
                <div>
                  <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                    {/* <h2 className="text-center mb-4">Dashboard</h2>
                    <Button variant="primary" className="ml-auto align-items-end">Action Button</Button> */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h1 className="text-center">Dashboard</h1>
                     <Button  className="ml-auto" id='buttoncolor'  onClick={handlecreate}>+ Create</Button> 
                   </div>
                    <Row>
                    
                      <h4 style={{ marginBottom: '15px' }}>View Assessment</h4>
                      <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>View Assessment</Card.Title>
                            <Card.Text>
                              <strong>Assessment Name:</strong> Java<br />
                              <strong>Assessment Module:</strong> Object<br />
                              <strong>Batch Name:</strong> First batch<br />
                              <strong>Test Date:</strong> 2024-07-20<br />
                              <strong>Timing:</strong> 200
                            </Card.Text>
                            <Button 
                              variant="info" 
                              onClick={() => handleView()} 
                              className="btn-sm me-2"
                              id="buttoncolor"
                            >
                              View
                            </Button>
                            <Button 
                              variant="danger" 
                              onClick={() => handleDelete()} 
                              className="btn-sm"
                            >
                              Delete
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>View Assessment</Card.Title>
                            <Card.Text>
                              <strong>Assessment Name:</strong> React<br />
                              <strong>Assessment Module:</strong> Redux<br />
                              <strong>Batch Name:</strong> Second<br />
                              <strong>Test Date:</strong> 2024-07-23<br />
                              <strong>Timing:</strong> 400
                            </Card.Text>
                            <Button 
                              variant="info" 
                              onClick={() => handleView()} 
                              className="btn-sm me-2"
                              id="buttoncolor"
                            >
                              View
                            </Button>
                            <Button 
                              variant="danger" 
                              onClick={() => handleDelete()} 
                              className="btn-sm"
                            >
                              Delete
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>View Assessment</Card.Title>
                            <Card.Text>
                              <strong>Assessment Name:</strong> React<br />
                              <strong>Assessment Module:</strong> Redux<br />
                              <strong>Batch Name:</strong> Second<br />
                              <strong>Test Date:</strong> 2024-07-23<br />
                              <strong>Timing:</strong> 400
                            </Card.Text>
                            <Button 
                              variant="info" 
                              onClick={() => handleView()} 
                              className="btn-sm me-2"
                              id="buttoncolor"
                            >
                              View
                            </Button>
                            <Button 
                              variant="danger" 
                              onClick={() => handleDelete()} 
                              className="btn-sm"
                            >
                              Delete
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      {questions.length > 0 ? (
                        questions.map((question, index) => (
                          <Col key={index} md={6} lg={4} className="mb-4">
                            <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
                              <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>View Assessment</Card.Title>
                                <Card.Text>
                                  <strong>Assessment Name:</strong> {question.testName}<br/>
                                  <strong>Assessment Module:</strong> {question.testCategory}<br/>
                                  <strong>Batch Name:</strong> {question.subCategory}<br />
                                  <strong>Test Date:</strong> {question.testDate}<br />
                                  <strong>Timing:</strong> {question.description}
                                </Card.Text>
                                <Button 
                                  variant="info" 
                                  onClick={() => handleView(index)} 
                                  className="btn-sm me-2"
                                  id="buttoncolor"
                                >
                                  View
                                </Button>
                                <Button 
                                  variant="danger" 
                                  onClick={() => handleDelete(index)} 
                                  className="btn-sm"
                                >
                                  Delete
                                </Button>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))
                      ) : (
                        <Col>
                          {/* <p className="text-center">No questions available</p> */}
                        </Col>
                      )}
                    </Row>
                    <Row>
                    <h4 style={{ marginBottom: '15px' }}>Assessment Status</h4>
                      <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>View Status</Card.Title>
                            <Card.Text>
                            <strong>Name:</strong> Vijaykumar<br/>
                                  <strong>Assessment Name:</strong>Java<br/>
                                  
                            </Card.Text>
                            <Button 
                              variant="info" 
                              onClick={() => handlestatus()} 
                              className="btn-sm me-2"
                              id="buttoncolor"
                            >
                            view
                            </Button>
                           
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%', backgroundColor:'lightgray'}}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>View Status</Card.Title>
                            <Card.Text>
                            <strong>Name:</strong> Vijay<br/>
                                  <strong>Assessment Name:</strong>React<br/>
                                  
                            </Card.Text>
                            <Button 
                              variant="info" 
                              onClick={() => handlestatus()} 
                              className="btn-sm me-2"
                              id="buttoncolor"
                            >
                              View
                            </Button>
                            
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>View Status</Card.Title>
                            <Card.Text>
                            <strong>Name:</strong> Vijaykumar<br/>
                                  <strong>Assessment Name:</strong>Java<br/>
                                  
                            </Card.Text>
                            <Button 
                              variant="info" 
                              onClick={() => handlestatus()} 
                              className="btn-sm me-2"
                              id="buttoncolor"
                            >
                            view
                            </Button>
                           
                          </Card.Body>
                        </Card>
                      </Col>
                      {submissions.length > 0 ? (
                        submissions.map((submission, index) => (
                          <Col key={index} md={6} lg={4} className="mb-4">
                            <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
                              <Card.Body>
                                <Card.Title>View Status</Card.Title>
                                <Card.Text>
                                  <strong>Name:</strong> {submission.firstName}<br/>
                                  <strong>Assessment Name:</strong> {submission.lastName}<br/>
                                 
                                </Card.Text>
                                <Button 
                                  variant="info" 
                                  onClick={() => handlestatus(index)} 
                                  className="btn-sm me-2"
                                  id="buttoncolor"
                                >
                                  View
                                </Button>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))
                      ) : (
                        <Col>
                          {/* <p className="text-center">No feedback submitted yet</p> */}
                        </Col>
                      )}
                    </Row>

                    <Row>
                    <h4 style={{ marginBottom: '15px' }}>Assessment Feedback</h4>
                      <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%',backgroundColor:'lightgray' }}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>Feedback</Card.Title>
                            <Card.Text>
                            <strong>Name:</strong> Vijaykumar<br/>
                                  <strong>Assessment Name:</strong>Java<br/>
                                  <strong>Feedback:</strong>Question easy
                            </Card.Text>
                            <Button 
                              variant="info" 
                              // onClick={() => handleView()} 
                              className="btn-sm me-2"
                              id="buttoncolor"
                            >
                            Response
                            </Button>
                           
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>Feedback</Card.Title>
                            <Card.Text>
                            <strong>Name:</strong> Vijay<br/>
                                  <strong>Assessment Name:</strong>React<br/>
                                  <strong>Feedback:</strong>Time Constrain
                            </Card.Text>
                            <Button 
                              variant="info" 
                             
                              className="btn-sm me-2"
                              id="buttoncolor"
                            >
                              Response
                            </Button>
                            
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%',backgroundColor:'lightgray' }}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>Feedback</Card.Title>
                            <Card.Text>
                            <strong>Name:</strong> Vijaykumar<br/>
                                  <strong>Assessment Name:</strong>Java<br/>
                                  <strong>Feedback:</strong>Question easy
                            </Card.Text>
                            <Button 
                              variant="info" 
                              // onClick={() => handleView()} 
                              className="btn-sm me-2"
                              id="buttoncolor"
                            >
                            Response
                            </Button>
                           
                          </Card.Body>
                        </Card>
                      </Col>
                      {submissions.length > 0 ? (
                        submissions.map((submission, index) => (
                          <Col key={index} md={6} lg={4} className="mb-4">
                            <Card style={{ width: '80%', backgroundColor:'lightgray' }}>
                              <Card.Body>
                                <Card.Title>Feedback</Card.Title>
                                <Card.Text>
                                  <strong>Name:</strong> {submission.firstName}<br/>
                                  <strong>Assessment Name:</strong> {submission.lastName}<br/>
                                  <strong>Feedback:</strong> {submission.feedback}<br />
                                </Card.Text>
                                <Button 
                                  variant="info" 
                                  className="btn-sm me-2"
                                  id="buttoncolor"
                                >
                                  Response
                                </Button>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))
                      ) : (
                        <Col>
                          {/* <p className="text-center">No feedback submitted yet</p> */}
                        </Col>
                      )}
                    </Row>
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
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Showquestion;

