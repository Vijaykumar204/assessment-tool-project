




import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Card, ListGroup, Form, Button } from 'react-bootstrap';
import { setResults } from './QuizResultsSlice';
import { useNavigate } from 'react-router-dom';
import ryt from './image/logoimg.png';

const Stuanswer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector(state => state.quiz.questions);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersVisible, setAnswersVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [submitted, setSubmitted] = useState(false); // Track if quiz has been submitted

  useEffect(() => {
    if (timeLeft === 0 && !submitted) {
      handleSubmit(); // Auto-submit when time runs out
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft > 0) {
          return prevTimeLeft - 1;
        } else {
          clearInterval(timer);
          if (!submitted) {
            handleSubmit(); // Auto-submit when time runs out
          }
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleOptionChange = (optionIndex) => {
    setSelectedOptions(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    let wrongCount = 0;
    const totalQuestions = questions.length;

    questions.forEach((question, qIndex) => {
      const selectedOptionIndex = selectedOptions[qIndex];
      if (selectedOptionIndex !== undefined && question.options[selectedOptionIndex] === question.answer) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    dispatch(setResults({
      totalQuestions,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      selectedOptions,
      questions
    }));

    setAnswersVisible(true);
    setSubmitted(true); // Mark as submitted
    navigate('/Resultpage');
  };

  return (
    <Container className="mt-5">
      <div className="container-fluid d-flex justify-content-between align-items-center mb-4" style={{ backgroundColor: '#45A29E' }}>
        <img src={ryt} alt="Logo" width="100px" />
        <h3 className="text-center" style={{ color: 'whitesmoke' }}>QUIZ TIME</h3>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <p className="font-weight-bold" style={{ color: 'whitesmoke' }}>Time left: {formatTime(timeLeft)}</p>
        </div>
      </div>
      {questions.length === 0 ? (
        <p>No questions available</p>
      ) : (
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>Question {currentQuestionIndex + 1}: {questions[currentQuestionIndex].questionText}</Card.Title>
            <ListGroup variant="flush">
              {questions[currentQuestionIndex].options.map((option, oIndex) => (
                <ListGroup.Item key={oIndex}>
                  <Form.Check
                    type="radio"
                    label={option}
                    name={`question-${currentQuestionIndex}`}
                    id={`question-${currentQuestionIndex}-option-${oIndex}`}
                    checked={selectedOptions[currentQuestionIndex] === oIndex}
                    onChange={() => handleOptionChange(oIndex)}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
            {answersVisible && (
              <Card.Text className="mt-2">
                <strong>Answer:</strong> {questions[currentQuestionIndex].answer}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      )}
      <div className="d-flex justify-content-between mt-4">
        <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</Button>
        {currentQuestionIndex < questions.length - 1 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={handleSubmit} id="buttoncolor">Submit</Button>
        )}
      </div>
    </Container>
  );
};

export default Stuanswer;
  
