import React from 'react';
// import './styles.css';

import profilePicture from './image/select_profile.png'; // Assuming you have the image in your src/image directory

const Profile = () => {
  return (
    <>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'" />
    
    </head>
    <div className="profile-card">
      <div className="profile-header">
        <img src={profilePicture} alt="Profile" style={{ marginLeft: '8px' }} />
        <h1>Vijay</h1>
        {/* <p>Web Developer</p> */}
      </div>
      <div className="profile-info">
        <h2>About Me</h2>
        <p>
          M Vijaykumar
          <br />
          20/04/2003
          <br />
          Government college of Engineering, Thanjavur
        </p>
        <h2>Contact Information</h2>
        <ul>
          <li><i className="fas fa-envelope"></i> vijay@example.com</li>
          <li><i className="fas fa-phone"></i> +1234567890</li>
          <li><i className="fas fa-map-marker-alt"></i> Coimbatore, Tamil Nadu</li>
        </ul>
        <div className="social-links">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
