

// import React, { useState } from 'react';
// import './Login.css'; // You can keep the CSS in a separate file
// import logo from './image/logoimg.png';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const navigate = useNavigate();
//   const users = useSelector((state) => state.users.users);

//   const reg = () => {
//     let valid = true;

//     if (!email) {
//       setEmailError('*please enter the email');
//       valid = false;
//     } else {
//       setEmailError('');
//     }

//     if (!password) {
//       setPasswordError('*please enter the password');
//       valid = false;
//     } else {
//       setPasswordError('');
//     }

//     const adminEmail = "admin@backy.in";
//     const adminPassword = "12345678";

//     if (valid) {
//       if (email === adminEmail && password === adminPassword) {
//         navigate('/Educator');
//       } else {
//         const user = users.find(user => user.email === email && user.password === password);
//         if (user) {
//           navigate('/Student');
//         } else {
//           setEmailError('*invalid email or password');
//           setPasswordError('*invalid email or password');
//         }
//       }
//     }
//   };

//   return (
//     <div className="homebody">
//       <div>
//         <img src={logo} alt="Logo" id="logoimage" className="img-fluid" />
//       </div>
//       <div className="form-container">
//         <p className="title">Login</p>
//         <form className="form">
//           <div className="input-group">
//             <label htmlFor="username">Email</label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               placeholder="abc@gmail.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <p id="email_text" style={{ color: 'red' }}>{emailError}</p>
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <p id="pass_text" style={{ color: 'red' }}>{passwordError}</p>
//             <div className="forgot">
//               <br />
//               <a href="forget.html">Forgot Password?</a>
//             </div>
//           </div>
//           <input type="button" value="Login" className="sign" onClick={reg} id="buttoncolor" />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;




// import React, { useState } from 'react';
// import './Login.css'; // You can keep the CSS in a separate file
// import logo from './image/logoimg.png';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const navigate = useNavigate();
//   const users = useSelector((state) => state.users.users);

//   const reg = () => {
//     let valid = true;

//     if (!email) {
//       setEmailError('*please enter the email');
//       valid = false;
//     } else {
//       setEmailError('');
//     }

//     if (!password) {
//       setPasswordError('*please enter the password');
//       valid = false;
//     } else {
//       setPasswordError('');
//     }

//     const adminEmail = "admin@backy.in";
//     const adminPassword = "12345678";

//     if (valid) {
//       if (email === adminEmail && password === adminPassword) {
//         navigate('/Educator');
//       } else {
//         const user = users.find(user => user.email === email && user.password === password);
//         if (user) {
//           navigate('/Student');
//         } else {
//           setEmailError('*invalid email or password');
//           setPasswordError('*invalid email or password');
//         }
//       }
//     }
//   };

//   return (
    
//       <div className="form-container">
//         <p className="title">Login</p>
//         <form className="form">
//           <div className="input-group">
//             <label htmlFor="username">Email</label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               placeholder="abc@gmail.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <p id="email_text" style={{ color: 'red' }}>{emailError}</p>
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <p id="pass_text" style={{ color: 'red' }}>{passwordError}</p>
//             <div className="forgot">
//               <br />
//               <a href="forget.html">Forgot Password?</a>
//             </div>
//           </div>
//           <input type="button" value="Login" className="sign" onClick={reg} id="buttoncolor" />
//         </form>
//       </div>
//     // </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import './Login.css'; // You can keep the CSS in a separate file
import logo from './image/logoimg.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);

  const validateEmail = (email) => {
    if (!email) {
      setEmailError('*please enter the email');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError('*please enter the password');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (validateEmail(value) && validatePassword(password)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (validateEmail(email) && validatePassword(value)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const reg = () => {
    if (!isFormValid) return;

    const adminEmail = "admin@backy.in";
    const adminPassword = "12345678";

    if (email === adminEmail && password === adminPassword) {
      navigate('/Educator');
    } else {
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        navigate('/Attendquizcard');
      } else {
        setEmailError('*invalid email');
        setPasswordError('*invalid  password');
      }
    }
  };

  return (
    <div className="form-container">
      <p className="title">Login</p>
      <form className="form">
        <div className="input-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <p id="email_text" style={{ color: 'red' }}>{emailError}</p>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <p id="pass_text" style={{ color: 'red' }}>{passwordError}</p>
          <div className="forgot">
            <br />
            <a href="forget.html">Forgot Password?</a>
          </div>
        </div>
        <input
          type="button"
          value="Login"
          className="sign"
          onClick={reg}
          id="buttoncolor"
          disabled={!isFormValid}
        />
      </form>
    </div>
  );
}

export default Login;
