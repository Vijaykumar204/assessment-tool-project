// import React, { useState } from "react";
// import { Container, Row, Col, Card, Nav, Navbar } from "react-bootstrap";
// import "./App.css";
// import { Link, useNavigate } from "react-router-dom";
// import { Modal, Button } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
// function Dashboard() {
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const navigate = useNavigate();
//    const location=useLocation();
//   const handleLogout = () => setShowLogoutModal(true);
//   const handleCloseModal = () => setShowLogoutModal(false);
//   const handleConfirmLogout = () => {
//     navigate("/"); // Navigate to Login.js
//     handleCloseModal();
//   };

//   return (
//     <>
//       <style>
//         {`

//             #Dashnav{
//             color:whitesmoke;
//             margin-Bottom:15px;
//             font-size:22px;
//             margin-left:7%;
//             text-decoration: none;

//             }
//             #Dashnav:hover{
//             text-decoration: underline;
//             }

//             `}
//       </style>

//       <Nav className="flex-column" style={{ marginTop: "10px" }}>
//         {/* <Link to="/Educator" id="Dashnav">
//           Home
//         </Link> */}
//         {location.pathname!=='/EduDashboardcard' &&
//         <Link to="/EduDashboardcard" id="Dashnav">
//           Dashboard
//         </Link>
// }
// {location.pathname==='/EduDashboardcard' &&
//         <Link to="/Educator" id="Dashnav">
//           Home
//         </Link>
// }
//         {/* <Link to="/Basicdetails" id="Dashnav">
//           Create
//         </Link> */}
//         <Link to="/Showquestion" id="Dashnav">
//           View Question
//         </Link>
//         <Link to="/Submitquestion" id="Dashnav">
//           Quiz status
//         </Link>
//         <Link to="/FeedbackList" id="Dashnav">
//           Feedback
//         </Link>
//         <Link to="#" id="Dashnav">
//           Profile
//         </Link>
//             <Link
//                id="Dashnav"
//               onClick={handleLogout}
//             >
//               Log out
//             </Link>
//       </Nav>
//       <Modal show={showLogoutModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Logout</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to log out?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             No
//           </Button>
//           <Button variant="primary" onClick={handleConfirmLogout}>
//             Yes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Dashboard;

import React, { useState } from "react";
import { Container, Offcanvas, Nav, Navbar, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";

function Dashboard() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => setShowLogoutModal(true);
  const handleCloseModal = () => setShowLogoutModal(false);
  const handleConfirmLogout = () => {
    navigate("/"); // Navigate to Login.js
    handleCloseModal();
  };

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <style>
        {`
          #Dashnav {
            color: whitesmoke;
            margin-bottom: 15px;
            font-size: 22px;
            text-decoration: none;
          }
          #Dashnav:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <Navbar expand="lg" style={{backgroundColor:'#45A29E',marginTop:'-10px'}}>
        <Container fluid>
          <Button  
          id="buttoncolor"
          style={{marginTop:'-30px'}}
           className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation" 
            onClick={toggleSidebar} >
            ☰
          </Button>
          {/* <Navbar.Brand href="#">Educator</Navbar.Brand> */}
        </Container>
      </Navbar>
          <div >
      <Offcanvas show={showSidebar} onHide={toggleSidebar} responsive="lg" >
        <Offcanvas.Header closeButton  style={{backgroundColor:'#45A29E'}}>
          <Offcanvas.Title style={{color:'whitesmoke'}}>Menu</Offcanvas.Title >
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundColor:'#45A29E'}}>
          <Nav className="flex-column" style={{marginTop:'-20px',position:'relative'}}>
            {location.pathname !== '/EduDashboardcard' && (
              <Nav.Link as={Link} to="/EduDashboardcard" id="Dashnav">
                Dashboard
              </Nav.Link>
            )}
            {location.pathname === '/EduDashboardcard' && (
              <Nav.Link as={Link} to="/Educator" id="Dashnav">
                Home
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/Showquestion" id="Dashnav">
              View Question
            </Nav.Link>
            <Nav.Link as={Link} to="/Submitquestion" id="Dashnav">
              Quiz Status
            </Nav.Link>
            <Nav.Link as={Link} to="/FeedbackList" id="Dashnav">
              Feedback
            </Nav.Link>
            <Nav.Link as={Link} to="#" id="Dashnav">
              Profile
            </Nav.Link>
            <Nav.Link id="Dashnav" onClick={handleLogout}>
              Log Out
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      </div>

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
    </>
  );
}

export default Dashboard;
