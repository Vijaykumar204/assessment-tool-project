// import React from 'react';
// import ryt from './image/logoimg.png';
// import { Container, Row, Col, Card, Nav, Navbar,Button } from 'react-bootstrap';
// function DashHeader() {
//     return (
//         <div className="App" >
//         <Navbar style={{backgroundColor:"#45A29E" }} expand="lg">
//         <a className="navbar-brand" href="#">
//             <img src={ryt} alt="Logo" width="100px"  />
//         </a>
//         <h2 style={{marginLeft:'7%',color:'whitesmoke',textAlign:'center'}}>Assessment Management</h2>
       
       
//         </Navbar>
//         </div>
//     );
// }
// export default DashHeader;

import React from 'react';
import ryt from './image/logoimg.png';
import { Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function DashHeader() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Educator"); // Navigate back to the previous page
  };

  return (
    <div className="App">
      <Navbar style={{ backgroundColor: "#45A29E", padding: '10px' }} expand="lg">
        <Navbar.Brand href="#">
          <img src={ryt} alt="Logo" width="100px" />
        </Navbar.Brand>
        <div style={{ flex: 1 }}>
          <h2 style={{ color: 'whitesmoke', marginLeft:'9%', display: 'inline-block' }}>
            Assessment Management
          </h2>
        </div>
        {/* <Button variant="secondary" onClick={handleBack} style={{ marginLeft: 'auto',color:'black',backgroundColor:'whitesmoke' }} >
          Back
        </Button> */}
      </Navbar>
    </div>
  );
}

export default DashHeader;
