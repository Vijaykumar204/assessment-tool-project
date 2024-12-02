

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import ryt from './image/logoimg.png'; // Adjust the path as needed
// import './Educator.css'; // Custom styles if any

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#45A29E' }}>
//       <a className="navbar-brand" href="/">
//         <img src={ryt} alt="Logo" width="100px" />
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//         style={{ zIndex: 1050 }} // Ensure toggle button is on top
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav" style={{ zIndex: 1040 }}>
//         <ul className="navbar-nav ms-auto" id="navbarhover">
//           <li className="nav-item p-3">
//             <a className="nav-link" href="student.html" id="navicon">Home</a>
//           </li>
//           <li className="nav-item p-3">
//             <a className="nav-link" href="stu_viewquiz.html" id="navicon">View Quiz</a>
//           </li>
//           <li className="nav-item p-3">
//             <a className="nav-link" href="#" id="navicon">Notification</a>
//           </li>
//           <li className="nav-item p-3">
//             <a className="nav-link" href="stu_feedback.html" id="navicon">Feedback</a>
//           </li>
//           <li className="nav-item dropdown p-3">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navicon"
//               role="button"
//               data-bs-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               <i className="fa-solid fa-user"></i> Profile
//             </a>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#45A29E' }}>
//               <a className="dropdown-item" href="sample.html" style={{ textDecoration: 'none' }}>View Profile</a>
//               <a
//                 className="dropdown-item"
//                 data-bs-toggle="modal"
//                 data-bs-target="#logoutModal"
//                 href="#"
//                 onClick={() => { if (window.logout_pop) window.logout_pop(); }}
//                 style={{ textDecoration: 'none' }}
//               >
//                 Log out
//               </a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ryt from './image/logoimg.png'; // Adjust the path as needed
import './Educator.css'; // Custom styles if any
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { Provider } from "react-redux";
function Navbar() {

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => setShowLogoutModal(true);
  const handleCloseModal = () => setShowLogoutModal(false);
  const handleConfirmLogout = () => {
    navigate("/"); // Navigate to Login.js
    handleCloseModal();
  };
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#45A29E' }}>
      <a className="navbar-brand" href="/">
        <img src={ryt} alt="Logo" width="100px" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ zIndex: 1050 }} // Ensure toggle button is on top
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" style={{ zIndex: 1040 }}>
        <ul className="navbar-nav ms-auto" id="navbarhover">
        <li className="nav-item p-2">
                <Link className="nav-link" to="/Student" id="navicon">Home</Link>
              </li>
              
              <li className="nav-item p-2">
                <Link className="nav-link" to="/Attendquizcard" id="navicon">Assessment</Link>
              </li>
             
              <li className="nav-item dropdown p-2">
                <Link
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navicon"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user naiicon_"></i> Profile
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#45A29E' }}>
                  <Link className="dropdown-item" to="/Profile" style={{ textDecoration: 'none' }}>View Profile</Link>
                  <Link
                    className="dropdown-item"
                    onClick={handleLogout}
                    style={{border: 'none', textDecoration: 'none' }}
                  >
                    Log out
                  </Link>
                </div>
              </li>
        </ul>
      </div>
    </nav>
     <Modal show={showLogoutModal} onHide={handleCloseModal}>
     <Modal.Header closeButton>
       <Modal.Title>Confirm Logout</Modal.Title>
     </Modal.Header>
     <Modal.Body>Are you sure you want to log out?</Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleCloseModal}>
         No
       </Button>
       <Button variant="primary" onClick={handleConfirmLogout}>
         Yes
       </Button>
     </Modal.Footer>
   </Modal>
   </div>
  );
}

export default Navbar;

