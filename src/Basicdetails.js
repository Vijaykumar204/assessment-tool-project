

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setForm, setErrors, clearErrors, addQuestion } from './FormSlice';
import './button.css';
import { Container,  Col,Row } from 'react-bootstrap';
import Dashboard from './Dashboard';
import DashHeader from './DashHeader';
   

const Basicdetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const form = useSelector(state => state.form.form || {});
  const errors = useSelector(state => state.form.errors || {});
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch(setForm({ id, value }));
    validateField(id, value);
  };

  const validateField = (id, value) => {
    const newErrors = { ...errors };
    if (!value) {
      newErrors[id] = '*Fill the form';
    } else {
      delete newErrors[id];
    }
    dispatch(setErrors(newErrors));
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!form.testName) newErrors.testName = '*Fill the form';
    if (!form.testCategory) newErrors.testCategory = '*Fill the form';
    if (!form.subCategory) newErrors.subCategory = '*Fill the form';
    if (!form.testDate) newErrors.testDate = '*Fill the form';
    if (!form.description) newErrors.description = '*Fill the form';

    if (Object.keys(newErrors).length > 0) {
      dispatch(setErrors(newErrors));
    } else {
      dispatch(clearErrors());
      dispatch(addQuestion());
      navigate('/Question');
    }
  };


  const handleReset = () => {
    dispatch(setForm({
      testName: '',
      testCategory: '',
      subCategory: '',
      testDate: '',
      description: ''
    }));
    dispatch(clearErrors());
  };
  const handleCancel = () => {
    navigate('/EduDashboardcard');
  };
  
  const getInputClass = (error) => {
    return error ? 'form-control border border-danger' : 'form-control';
  };

  return (
    <>
    <DashHeader/>
    <Container fluid>
        <Row>
        <Col md={2} className="sidebar"style={{backgroundColor:"#45A29E" }} >
        <Dashboard/>
        </Col>
        <Col md={10} className="main-content" >
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="p-4 rounded shadow-sm" style={{ backgroundColor:'lightgray' }}>
            <h1 className="text-center mb-4">Assessment</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="testName" className="form-label">Assessment Name</label>
                <input
                  type="text"
                  className={getInputClass(errors.testName)}
                  id="testName"
                  value={form.testName || ''}
                  onChange={handleChange}
                />
                {errors.testName && <div className="text-danger">{errors.testName}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="testCategory" className="form-label">Assessment Module</label>
                <input
                  type="text"
                  className={getInputClass(errors.testCategory)}
                  id="testCategory"
                  value={form.testCategory || ''}
                  onChange={handleChange}
                />
                {errors.testCategory && <div className="text-danger">{errors.testCategory}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="subCategory" className="form-label">Batch Name</label>
                <input
                  type="text"
                  className={getInputClass(errors.subCategory)}
                  id="subCategory"
                  value={form.subCategory || ''}
                  onChange={handleChange}
                />
                {errors.subCategory && <div className="text-danger">{errors.subCategory}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="testDate" className="form-label">Test Date</label>
                <input
                  type="date"
                  className={getInputClass(errors.testDate)}
                  id="testDate"
                  value={form.testDate || ''}
                  onChange={handleChange}
                />
                {errors.testDate && <div className="text-danger">{errors.testDate}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Timing</label>
                <input
                type="number"
                  className={getInputClass(errors.description)}
                  id="description"
                
                  value={form.description || ''}
                  onChange={handleChange}
                ></input>
                {errors.description && <div className="text-danger">{errors.description}</div>}
              </div>
              <div className="text-center">
                <button type="button" className="btn" id="buttoncolor" onClick={handleSubmit}>Submit</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={handleReset}>Reset</button>
                <button type="button" className="btn btn-danger ms-2" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
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

export default Basicdetails;



