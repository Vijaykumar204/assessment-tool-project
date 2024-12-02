// import React from 'react';
// import './Home.css'; // Ensure this file exists and is properly imported
// import logo from './image/logoimg.png'; // Ensure these image paths are correct
// import homeimg from './image/homwqueen.jpeg';
// import { Link, useLocation } from 'react-router-dom';

// function Home() {
//   const location = useLocation();
//   const isLog = location.pathname === '/Login';

//   const renderLinks = () => {
//     if (!isLog) {
//       return (
//         <Link to="/Login">
//           <button id='loginid'>Login</button>
//         </Link>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="homebody1">
//       <header className="d-flex justify-content-between align-items-center p-3">
//         <img src={logo} alt="Logo" id="logoimage" className="img-fluid" />
//         <div >
//           {renderLinks()}
//         </div>
//       </header>
//       <div className="container homewidth mx-auto mt-5">
//         <div className="contain p-4 mx-auto">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <div className="homepara">
//                 <p className="homepara_1"><b>The Best Quiz for Business & Education</b></p>
//                 <p className="homepara_2">
//                   It is an easy-to-use, customizable online testing solution for business, training & education assessments with Tests Quizzes graded instantly.
//                 </p>
//                 <Link to="/login">
//                   <button type="button" className="homebotton btn mt-2" id='getstart' >Get started</button>
//                 </Link>
//               </div>
//             </div>
//             <div className="col-md-6 text-center p-4">
//               <img src={homeimg} alt="Home" className="img-fluid" id="homeimg" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


// import React, { useState } from 'react';
// import './Home.css'; // Ensure this file exists and is properly imported
// import logo from './image/logoimg.png'; // Ensure these image paths are correct
// import homeimg from './image/homwqueen.jpeg';
// import { Link, useLocation } from 'react-router-dom';
// import { Modal, Button } from 'react-bootstrap';
// import Login from './Login'; // Import the Login component

// function Home() {
//   const location = useLocation();
//   const isLog = location.pathname === '/Login';
//   const [showModal, setShowModal] = useState(false);

//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

//   const renderLinks = () => {
//     if (!isLog) {
//       return (
//         <Button variant="primary" onClick={handleShow} id='loginid'>
//           Login
//         </Button>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="homebody1">
//       <header className="d-flex justify-content-between align-items-center p-3">
//         <img src={logo} alt="Logo" id="logoimage" className="img-fluid" />
//         <div>
//           {renderLinks()}
//         </div>
//       </header>
//       <div className="container homewidth mx-auto mt-5">
//         <div className="contain p-4 mx-auto">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <div className="homepara">
//                 <p className="homepara_1"><b>The Best Quiz for Business & Education</b></p>
//                 <p className="homepara_2">
//                   It is an easy-to-use, customizable online testing solution for business, training & education assessments with Tests Quizzes graded instantly.
//                 </p>
//                 <Link to="/login">
//                   <button type="button" className="homebotton btn mt-2" id='getstart'>Get started</button>
//                 </Link>
//               </div>
//             </div>
//             <div className="col-md-6 text-center p-4">
//               <img src={homeimg} alt="Home" className="img-fluid" id="homeimg" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Login */}
//       <Modal show={showModal} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Login />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import './Home.css'; // Ensure this file exists and is properly imported
import logo from './image/logoimg.png'; // Ensure these image paths are correct
import homeimg from './image/homwqueen.jpeg';
import { Link, useLocation } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Login from './Login'; // Import the Login component

function Home() {
  const location = useLocation();
  const isLog = location.pathname === '/Login';
  const [showModal, setShowModal] = useState(false);

  const renderLinks = () => {
    if (!isLog) {
      return (
        <Button  onClick={() => setShowModal(true)} id='getstart1'   >Login</Button>
      );
    }
    return null;
  };

  return (
    <div className="homebody1">
      <header className="d-flex justify-content-between align-items-center p-3">
        <img src={logo} alt="Logo" id="logoimage" className="img-fluid" />
        <div>
          {renderLinks()}
        </div>
      </header>
      <div className="container homewidth mx-auto mt-5">
        <div className="contain p-4 mx-auto">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="homepara">
                <p className="homepara_1"><b>The Best Quiz for Business & Education</b></p>
                <p className="homepara_2">
                  It is an easy-to-use, customizable online testing solution for business, training & education assessments with Tests Quizzes graded instantly.
                </p>
                
                  <button type="button" className="homebotton btn mt-2" id='getstart' onClick={() => setShowModal(true)}>Get started</button>
               
              </div>
            </div>
            <div className="col-md-6 text-center p-4">
              <img src={homeimg} alt="Home" className="img-fluid" id="homeimg" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Login */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="custom-modal" // Apply custom class
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Login</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
