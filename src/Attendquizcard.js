


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setQuestionForView } from './FormSlice';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import StudentDashboard from './StudentDashboard'; 
import DashHeader from './DashHeader';

const Attendquizcard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Ensure questions is an array
  const questions = useSelector(state => state.form.questions || []);

  const handleViewQuiz = (index) => {
    dispatch(setQuestionForView(questions[index]));
    navigate('/Stuanswer');
  };

  const handleViewResult = (index) => {
    dispatch(setQuestionForView(questions[index]));
    navigate('/StuStatusresult');
  };
  const { totalQuestions, correctAnswers } = useSelector(state => state.quizResults);
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  return (
    <>
      <DashHeader />
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar" style={{ backgroundColor: "#45A29E" }}>
            <StudentDashboard />
          </Col>
          <Col md={10} className="main-content">
            <div className="container mt-1">
              <div className="row justify-content-center">
                <div>
                  <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                    <h1 className=" mb-4">Dashboard</h1>
                    
                    <div className="row">
                      <h4 style={{marginBottom:'15px'}}>Assessment Quiz</h4>
                    <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%', backgroundColor:'lightgray'  }}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>QUIZ</Card.Title>
                            <Card.Text>
                            <strong>Assessment Name:</strong>Java<br />
                                  <strong>Assessment Module:</strong>Object<br />
                                  <strong>Batch Name:</strong>First batch<br />
                                  <strong>Test Date:</strong>2024-07-20<br />
                                  <strong>Timing:</strong>200
                            </Card.Text>
                            <Button 
                                  variant="info" 
                                  onClick={() => handleViewQuiz()} 
                                  className="btn-sm"
                                  id="buttoncolor"
                                >
                                  Attend Quiz
                                </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%', backgroundColor:'lightgray'  }}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>QUIZ</Card.Title>
                            <Card.Text>
                            <strong>Assessment Name:</strong>React<br />
                                  <strong>Assessment Module:</strong>Redux<br />
                                  <strong>Batch Name:</strong>Second<br />
                                  <strong>Test Date:</strong>2024--7-23<br />
                                  <strong>Timing:</strong>vdv
                            </Card.Text>
                            <Button 
                                  variant="info" 
                                  onClick={() => handleViewQuiz()} 
                                  className="btn-sm"
                                  id="buttoncolor"
                                >
                                  Attend Quiz
                                </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      {questions.length > 0 ? (
                        questions.map((question, index) => (
                          <Col key={index} md={6} lg={4} className="mb-4">
                            <Card style={{ width: '80%', backgroundColor:'lightgray'  }}>
                              <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>QUIZ</Card.Title>
                                <Card.Text>
                                  <strong>Assessment Name:</strong> {question.testName}<br />
                                  <strong>Assessment Module:</strong> {question.testCategory}<br />
                                  <strong>Batch Name:</strong> {question.subCategory}<br />
                                  <strong>Test Date:</strong> {question.testDate}<br />
                                  <strong>Timing:</strong> {question.description}
                                </Card.Text>
                                <Button 
                                  variant="info" 
                                  onClick={() => handleViewQuiz(index)} 
                                  className="btn-sm"
                                  id="buttoncolor"
                                >
                                  Attend Quiz
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
                    </div>
                    
                    <div className="row">
                    <h4 style={{marginBottom:'15px'}}>Assessment Result</h4>
                    <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%', backgroundColor:'lightgray'  }}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>QUIZ RESULT</Card.Title>
                            <Card.Text>
                            <strong>Assessment Name:</strong>Java<br />
                                  <strong>Assessment Module:</strong>Object<br />
                                  <strong>Batch Name:</strong>First batch<br />
                                  <strong>Test Date:</strong>2024-07-20<br />
                                  <strong>Timing:</strong>200
                            </Card.Text>
                            <Button 
                                  variant="info" 
                                  onClick={() => handleViewResult()} 
                                  className="btn-sm"
                                  id="buttoncolor"
                                >
                                  View Result
                                </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6} lg={4} className="mb-4">
                        <Card style={{ width: '80%',backgroundColor:'lightgray'  }}>
                          <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>QUIZ RESULT</Card.Title>
                            <Card.Text>
                            <strong>Assessment Name:</strong>React<br />
                                  <strong>Assessment Module:</strong>Redux<br />
                                  <strong>Batch Name:</strong>Second<br />
                                  <strong>Test Date:</strong>2024--7-23<br />
                                  <strong>Timing:</strong>vdv
                            </Card.Text>
                            <Button 
                                  variant="info" 
                                  onClick={() => handleViewResult()} 
                                  className="btn-sm"
                                  id="buttoncolor"
                                >
                                  View Result
                                </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      {questions.length > 0 ? (
                        questions.map((question, index) => (
                          <Col key={index} md={6} lg={4} className="mb-4">
                            <Card style={{ width: '80%',backgroundColor:'lightgray'  }}>
                              <Card.Body>
                                <Card.Title style={{ textAlign: 'center' }}>QUIZ RESULT</Card.Title>
                                <Card.Text>
                                  <strong>Assessment Name:</strong>{question.testName}<br />
                                  <strong>Assessment Module:</strong>{question.testCategory}<br />
                                  <strong>Sub Category:</strong> {question.subCategory}<br />
                                  <strong>Test Date:</strong> {question.testDate}<br/>
                                  <strong>Timing:</strong> {question.description}
                                </Card.Text>
                                <Button 
                                  variant="info" 
                                  onClick={() => handleViewResult(index)} 
                                  className="btn-sm"
                                  id="buttoncolor"
                                >
                                  View Result
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
                    </div>
                    
                    <div className="row">
                      <Row>
                      <h4 style={{marginBottom:'15px'}}>Recent Score</h4>
                        <Col xs={12} sm={6} md={4} lg={3} className="my-2">
                          <div className="border p-3 rounded" style={{ backgroundColor:'lightgray'  }}>
                            <p className="mb-1"><b>YOUR SCORE</b></p>
                            <h1 className="mb-0">{percentage}%</h1>
                            <hr />
                            <h6 className="mb-0">OUT OF 100%</h6>
                          </div>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3} className="my-2">
                          <div className="border p-3 rounded" style={{backgroundColor:'lightgray'  }}>
                            <p className="mb-1"><b>YOUR POINT</b></p>
                            <h1 className="mb-0">{correctAnswers}</h1>
                            <hr />
                            <h6 className="mb-0">OUT OF {totalQuestions}</h6>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* Static report for student marks */}
                   

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

export default Attendquizcard;









