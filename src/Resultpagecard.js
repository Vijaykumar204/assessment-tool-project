import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Resultpage = () => {
  const { totalQuestions, correctAnswers } = useSelector(state => state.quizResults);
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  return (
    <div className="container mt-5">
      <Row className="justify-content-center my-3">
        <Col xs={12} sm={6} md={4} lg={3} className="my-2">
          <div className="border p-3 rounded" style={{ backgroundColor: 'white' }}>
            <p className="mb-1"><b>YOUR SCORE</b></p>
            <h1 className="mb-0">{percentage}%</h1>
            <hr />
            <h6 className="mb-0">OUT OF 100%</h6>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="my-2">
          <div className="border p-3 rounded" style={{ backgroundColor: 'white' }}>
            <p className="mb-1"><b>YOUR POINT</b></p>
            <h1 className="mb-0">{correctAnswers}</h1>
            <hr />
            <h6 className="mb-0">OUT OF {totalQuestions}</h6>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Resultpage;
