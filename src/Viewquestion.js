
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Container, Card, ListGroup, Col,Row,Form } from 'react-bootstrap';

// import Dashboard from './Dashboard';
// import DashHeader from './DashHeader';

// const Viewquestion = () => {
//   const questions = useSelector(state => state.quiz.questions);
//   const [selectedOptions, setSelectedOptions] = useState({});

//   const handleOptionChange = (questionIndex, optionIndex) => {
//     setSelectedOptions(prev => ({
//       ...prev,
//       [questionIndex]: optionIndex
//     }));
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
//     <Container className="mt-5">
//       <h3 className="text-center mb-2">View Questions</h3>
//       {questions.length === 0 ? (
//         <p>No questions available</p>
//       ) : (
//         questions.map((question, qIndex) => (
//           <Card key={qIndex} className="mb-3">
//             <Card.Body>
//               <Card.Title>{question.questionText}</Card.Title>
//               <ListGroup variant="flush">
//                 {question.options.map((option, oIndex) => (
//                   <ListGroup.Item key={oIndex}>
//                     <Form.Check
//                       type="radio"
//                       label={option}
//                       name={`question-${qIndex}`}
//                       id={`question-${qIndex}-option-${oIndex}`}
//                       checked={selectedOptions[qIndex] === oIndex}
//                       onChange={() => handleOptionChange(qIndex, oIndex)}
//                     />
//                   </ListGroup.Item>
//                 ))}
//               </ListGroup>
//               <Card.Text className="mt-2">
//                 <strong>Answer:</strong> {question.answer}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         ))
//       )}
//     </Container>
//      </Col>
//      </Row>
//      </Container>
//      </>
 
//   );
// };

// export default Viewquestion;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, ListGroup, Col, Row, Form } from 'react-bootstrap';

import Dashboard from './Dashboard';
import DashHeader from './DashHeader';

const Viewquestion = () => {
  const questions = useSelector(state => state.quiz.questions);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
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
            <Container className="mt-5">
              <h3 className="text-center mb-2">View Questions</h3>
              {questions.length === 0 ? (
                <p>No questions available</p>
              ) : (
                questions.map((question, qIndex) => (
                  <Card key={qIndex} className="mb-3">
                    <Card.Body>
                      <Card.Title>
                        Question {qIndex + 1}: {question.questionText}
                      </Card.Title>
                      <ListGroup variant="flush">
                        {question.options.map((option, oIndex) => (
                          <ListGroup.Item key={oIndex}>
                            <Form.Check
                              type="radio"
                              label={option}
                              name={`question-${qIndex}`}
                              id={`question-${qIndex}-option-${oIndex}`}
                              checked={selectedOptions[qIndex] === oIndex}
                              onChange={() => handleOptionChange(qIndex, oIndex)}
                            />
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                      <Card.Text className="mt-2">
                        <strong>Answer:</strong> {question.answer}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Viewquestion;

