

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Container, Card, ListGroup, Col,Row } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import ryt from './image/logoimg.png';
// // import { Container,  Col,Row } from 'react-bootstrap';
// import Dashboard from './Dashboard';
// import DashHeader from './DashHeader';

// const Submitquestion = () => {
//   const navigate = useNavigate();
//   const { totalQuestions = 0, correctAnswers = 0, wrongAnswers = 0, selectedOptions = {}, questions = [] } = useSelector(state => state.quizResults) || {};

//   const handleBackToQuiz = () => {
//     navigate('/Stuanswer');
//   };

//   return (
//     <>
//     <DashHeader/>
//     <Container fluid>
    
//         <Row>
//         <Col md={2} className="sidebar"style={{backgroundColor:"#45A29E" }} >
//         <Dashboard/>
//         </Col>
//         <Col md={10} className="main-content" >
//     <Container className="mt-2">
//       {/* <div className="container-fluid d-flex justify-content-between align-items-center mb-4" style={{ backgroundColor: '#45A29E' }}>
//         <img src={ryt} alt="Logo" width="100px" />
//         <h3 className="text-center" style={{ color: 'whitesmoke' }}>QUIZ RESULTS</h3>
//       </div> */}
//        <h3 className="text-center" style={{  }}>Quiz Result</h3>
//       <Card className="mb-4">
//         <Card.Body>
//           <Card.Title>Results</Card.Title>
//           <Card.Text>
//             <strong>Total Questions:</strong> {totalQuestions}
//           </Card.Text>
//           <Card.Text>
//             <strong>Correct Answers:</strong> {correctAnswers}
//           </Card.Text>
//           <Card.Text>
//             <strong>Wrong Answers:</strong> {wrongAnswers}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       {questions.map((question, qIndex) => {
//         const selectedOptionIndex = selectedOptions[qIndex];
//         return (
//           <Card key={qIndex} className="mb-3">
//             <Card.Body>
//               <Card.Title>{question.questionText}</Card.Title>
//               <ListGroup variant="flush">
//                 {question.options.map((option, oIndex) => {
//                   // Determine the background color based on the option's correctness
//                   let bgColor = '';
//                   if (selectedOptionIndex === oIndex) {
//                     bgColor = option === question.answer ? '#d3f9d8' : '#f8d7da'; // green if correct, red if incorrect
//                   }
//                   return (
//                     <ListGroup.Item key={oIndex} style={{ backgroundColor: bgColor }}>
//                       {option}
//                     </ListGroup.Item>
//                   );
//                 })}
//               </ListGroup>
//               <Card.Text className="mt-2">
//                 <strong>Correct Answer:</strong> {question.answer}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         );
//       })}
//       {/* <div className="d-flex justify-content-end mt-4">
//         <Button onClick={handleBackToQuiz}>Back to Quiz</Button>
//       </div> */}
//     </Container>
//     </Col>
//     </Row>
//     </Container>
//     </>

//   );
// };

// export default Submitquestion;

import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, ListGroup, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashHeader from './DashHeader';

const Submitquestion = () => {
  const navigate = useNavigate();
  const { totalQuestions = 0, correctAnswers = 0, wrongAnswers = 0, selectedOptions = {}, questions = [] } = useSelector(state => state.quizResults) || {};

  const handleBackToQuiz = () => {
    navigate('/Stuanswer');
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
            <Container className="mt-2">
              <h3 className="text-center">Quiz Result</h3>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Results</Card.Title>
                  <Card.Text>
                    <strong>Total Questions:</strong> {totalQuestions}
                  </Card.Text>
                  <Card.Text>
                    <strong>Correct Answers:</strong> {correctAnswers}
                  </Card.Text>
                  <Card.Text>
                    <strong>Wrong Answers:</strong> {wrongAnswers}
                  </Card.Text>
                </Card.Body>
              </Card>
              {questions.map((question, qIndex) => {
                const selectedOptionIndex = selectedOptions[qIndex];
                return (
                  <Card key={qIndex} className="mb-3">
                    <Card.Body>
                      <Card.Title>Question {qIndex + 1}: {question.questionText}</Card.Title>
                      <ListGroup variant="flush">
                        {question.options.map((option, oIndex) => {
                          // Determine the background color based on the option's correctness
                          let bgColor = '';
                          if (selectedOptionIndex === oIndex) {
                            bgColor = option === question.answer ? '#d3f9d8' : '#f8d7da'; // green if correct, red if incorrect
                          }
                          return (
                            <ListGroup.Item key={oIndex} style={{ backgroundColor: bgColor }}>
                              {option}
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>
                      <Card.Text className="mt-2">
                        <strong>Correct Answer:</strong> {question.answer}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Submitquestion;
