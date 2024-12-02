
// import React, { useState } from 'react';
// import { Container } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { submitFeedback } from './actions';
// import { useNavigate } from 'react-router-dom';

// const Feedback = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [feedback, setFeedback] = useState('');

//   const handleSubmit = () => {
//     if (firstName && lastName && feedback) {
//       dispatch(submitFeedback({ firstName, lastName, feedback }));
//       setFirstName('');
//       setLastName('');
//       setFeedback('');
//       navigate('/Attendquizcard');
//     }
//   };

//   const handleReset = () => {
//     setFirstName('');
//     setLastName('');
//     setFeedback('');
//   };

//   return (
//     <Container className="mt-4">
//       <div style={{ backgroundColor: 'lightgray' }}>
//         <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
//           <h2>Feedback Form</h2>
//           <form>
//             <div style={{ marginBottom: '15px' }}>
//               <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
//               <input
//                 type="text"
//                 id="firstName"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//                 required
//               />
//             </div>
//             <div style={{ marginBottom: '15px' }}>
//               <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px' }}>Test Name:</label>
//               <input
//                 type="text"
//                 id="lastName"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//                 required
//               />
//             </div>
//             <div style={{ marginBottom: '15px' }}>
//               <label htmlFor="feedback" style={{ display: 'block', marginBottom: '5px' }}>Feedback:</label>
//               <textarea
//                 id="feedback"
//                 value={feedback}
//                 onChange={(e) => setFeedback(e.target.value)}
//                 style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//                 required
//               />
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <button 
//                 type="button"
//                 onClick={handleSubmit}
//                 style={{ padding: '10px 20px', backgroundColor: '#45A29E', color: '#fff', border: 'none', borderRadius: '5px' }}
//               >
//                 Submit
//               </button>
//               <button 
//                 type="button"
//                 onClick={handleReset}
//                 style={{ padding: '10px 20px', backgroundColor: '#e0e0e0', color: '#000', border: 'none', borderRadius: '5px' }}
//               >
//                 Reset
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Feedback;
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { submitFeedback } from './actions';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [errors, setErrors] = useState({});

  const validateField = (id, value) => {
    const newErrors = { ...errors };
    if (!value) {
      newErrors[id] = '*This field is required';
    } else {
      delete newErrors[id];
    }
    setErrors(newErrors);
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = '*please fill the field';
    if (!lastName) newErrors.lastName = '*please fill the field';
    if (!feedback) newErrors.feedback = '*please fill the field';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      dispatch(submitFeedback({ firstName, lastName, feedback }));
      setFirstName('');
      setLastName('');
      setFeedback('');
      navigate('/Attendquizcard');
    }
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setFeedback('');
    setErrors({});
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'firstName') setFirstName(value);
    if (id === 'lastName') setLastName(value);
    if (id === 'feedback') setFeedback(value);
    validateField(id, value);
  };

  return (
    <Container className="mt-4">
      <div style={{ backgroundColor: 'lightgray' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
          <h2>Feedback Form</h2>
          <form>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                required
              />
              {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px' }}>Test Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                required
              />
              {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="feedback" style={{ display: 'block', marginBottom: '5px' }}>Feedback</label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                required
              />
              {errors.feedback && <div className="text-danger">{errors.feedback}</div>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                type="button"
              
                onClick={handleSubmit}
                style={{ padding: '10px 20px', backgroundColor: '#45A29E', color: '#fff', border: 'none', borderRadius: '5px' }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleReset}
                style={{ padding: '10px 20px', backgroundColor: '#f0bf0c', color: 'white', border: 'none', borderRadius: '5px' }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Feedback;
