

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ryt from "./image/logoimg.png";

const Resultpage = () => {
  const { totalQuestions, correctAnswers } = useSelector(state => state.quizResults);
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);
  const navigate = useNavigate();

  const back = () => {
    navigate("/Attendquizcard");
  }

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css" />
      </head>
      <Container className="text-center mt-4">
        <div className="container-fluid d-flex justify-content-between align-items-center mb-3" style={{ backgroundColor: '#45A29E' }}>
          <img src={ryt} alt="Logo" width="100px" />
          {/* <h3 style={{ color: 'whitesmoke' }}>QUIZ RESULT</h3> */}
          {/* <Button style={{backgroundColor:'white',color:'black'}} onClick={back}>Back to Home</Button> */}
        </div>
        <div style={{ backgroundColor: 'lightgray',marginTop:'10px'}}>
          <Row>
            <Col>
              <h2>Quiz Result</h2>
              <div className="d-flex justify-content-center my-4">
                <div className={`bg-success rounded-circle p-3 ${percentage < 50 ? 'd-none' : ''}`}>
                  <i className="bi bi-check2-circle text-white" style={{ fontSize: '2rem' }}></i>
                </div>
                <div className={`bg-danger rounded-circle p-3 ${percentage >= 50 ? 'd-none' : ''}`}>
                  <i className="bi bi-x text-white" style={{ fontSize: '2rem' }}></i>
                </div>
              </div>
              <p>{percentage >= 50 ? 'Nice job, you passed!' : 'Unfortunately, you did not pass.'}</p>
              <Row className="justify-content-center my-3">
                <Col xs={12} sm={6} md={4} lg={3} className="my-2">
                  <div className="border p-3" style={{backgroundColor:'whitesmoke'}}>
                    <p className="mb-1"><b>YOUR SCORE</b></p>
                    <h1 className="mb-0">{percentage}%</h1>
                    <hr />
                    <h6 className="mb-0">OUT OF 100%</h6>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="my-2">
                  <div className="border p-3" style={{backgroundColor:'whitesmoke'}} >
                    <p className="mb-1"><b>YOUR POINT</b></p>
                    <h1 className="mb-0">{correctAnswers}</h1>
                    <hr />
                    <h6 className="mb-0">OUT OF &nbsp; {totalQuestions}</h6>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Resultpage;

