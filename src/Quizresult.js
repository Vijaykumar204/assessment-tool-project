


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { deleteQuestion, setQuestionForView } from './FormSlice';
// import StudentDashboard from './StudentDashboard'; 
// import DashHeader from './DashHeader';
// import { Container, Row, Col, Card, Nav, Navbar } from "react-bootstrap";

// const Attendquiz = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   // Ensure questions is an array
//   const questions = useSelector(state => state.form.questions || []);

//   const handleView = (index) => {
//     dispatch(setQuestionForView(questions[index]));
//     navigate('/Stustatusresult');
//   };

// //   const handleDelete = (index) => {
// //     dispatch(deleteQuestion(index));
// //   };

//   return (
//     <>
//     <DashHeader/>
//    <Container fluid>
   
//        <Row>
//        <Col md={2} className="sidebar"style={{backgroundColor:"#45A29E" }} >
//        <StudentDashboard/>
//        </Col>
//        <Col md={10} className="main-content" >
//     <div className="container mt-2">
//       <div className="row justify-content-center">
//         <div >
//           <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
//             <h1 className="text-center mb-4">Quiz Result</h1>
//             <table className="table table-striped" style={{ width: '100%' }}>
//               <thead>
//                 <tr>
//                   <th>Test Name</th>
//                   <th>Test Category</th>
//                   <th>Sub Category</th>
//                   <th>Test Date</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {questions.length > 0 ? (
//                   questions.map((question, index) => (
//                     <tr key={index}>
//                       <td>{question.testName}</td>
//                       <td>{question.testCategory}</td>
//                       <td>{question.subCategory}</td>
//                       <td>{question.testDate}</td>
//                       <td>
//                         <button className="btn btn-info btn-sm me-2 p-2" onClick={() => handleView(index)} id="buttoncolor">View Result</button>
//                         {/* <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button> */}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     {/* <td colSpan="5" className="text-center">No questions available</td> */}
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//     </Col>
//     </Row>
//     </Container>
//     </>
//   );
// };

// export default Attendquiz;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteQuestion, setQuestionForView } from './FormSlice';
import StudentDashboard from './StudentDashboard'; 
import DashHeader from './DashHeader';
import { Container, Row, Col, Card, Nav, Navbar } from "react-bootstrap";

const Attendquiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Ensure questions is an array
  const questions = useSelector(state => state.form.questions || []);

  const handleView = (index) => {
    dispatch(setQuestionForView(questions[index]));
    navigate('/Stustatusresult');
  };

  return (
    <>
      <DashHeader />
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar" style={{ backgroundColor: "#45A29E" }}>
            <StudentDashboard />
          </Col>
          <Col md={10} className="main-content">
            <div className="container mt-2">
              <div className="row justify-content-center">
                <div>
                  <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                    <h2 className="text-center mb-4">Quiz Result</h2>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Test Name</th>
                            <th>Test Category</th>
                            <th>Sub Category</th>
                            <th>Test Date</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {questions.length > 0 ? (
                            questions.map((question, index) => (
                              <tr key={index}>
                                <td>{question.testName}</td>
                                <td>{question.testCategory}</td>
                                <td>{question.subCategory}</td>
                                <td>{question.testDate}</td>
                                <td>
                                  <button className="btn btn-info btn-sm me-2 p-2" onClick={() => handleView(index)} id="buttoncolor">View Result</button>
                                  {/* <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button> */}
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="5" className="text-center">No questions available</td>
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
    </>
  );
};

export default Attendquiz;
