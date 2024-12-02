import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Footer from "./footer";
import Carddemo from "./Carddemo";
import Educator from "./Educator";
import Stucard from "./Stucard";
import Student from "./Student";
import Navbar from "./Navbar";
import Basicdetails from "./Basicdetails";
import Header1 from "./Header1";
import Educontent from "./Educontent";
import Educard1 from "./Educard1";

import { Provider } from "react-redux";
// import { store } from "./Store";
import store from "./Storeq";
import UserManagement from "./UserManagement";
import Question from "./Question";
import Viewquestion from "./Viewquestion";
import Stuanswer from "./Stuanswer";
import Resultpage from "./Resultpage";
import Showquestion from "./Showquestion";
import Profile from "./Profile";
import Nav from "./Nav";
import Attendquiz from "./Attendquiz";
import Submitquestion from "./Submitquestion";
import Quizresult from "./Quizresult";
import ViewStatus from "./ViewStatus";
import Feedback from "./Feedback";
import FeedbackList from "./FeedbackList";
import Dashboard from "./Dashboard";
import StudentDashboard from "./StudentDashboard";
import Attendquizcard from "./Attendquizcard";
import Resultpagecard from "./Resultpagecard";
import EduDashboardcard from "./EduDashboardcard"
import Stustatusresult from "./Stustatusresult";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/Login"
            element={
              <>
                <Provider store={store}>
                  <Login />
                </Provider>

                <Footer />
              </>
            }
          />

          <Route
            path="/Login"
            element={
              <>
                <Footer />
              </>
            }
          />
          <Route
            path="/Header1"
            element={
              <>
                <Header1 />
              </>
            }
          />
          <Route
            path="/Educator"
            element={
              <>
                <Header1 />
                <Educontent />
                <Educard1 />
                <Carddemo />
                <Footer />
              </>
            }
          />
          <Route
            path="/Student"
            element={
              <>
                <Student />
              </>
            }
          />
          <Route
            path="/Basicdetails"
            element={
              <>
               
                <Provider store={store}>
                  <Basicdetails />
                </Provider>
                <Footer />
              </>
            }
          />
          <Route
            path="/UserManagement"
            element={
              <>
                <Header1 />
                <Provider store={store}>
                  <UserManagement />
                </Provider>
                <Footer />
              </>
            }
          />
          <Route
            path="/Question"
            element={
              <>
                <Provider store={store}>
                  <Question />
                </Provider>
              </>
            }
          />
          <Route
            path="/Quizresult"
            element={
              <>
                
                <Provider store={store}>
                  <Quizresult />
                </Provider>
                <Footer />
              </>
            }
          />
          <Route
            path="/Submitquestion"
            element={
              <>
                
                <Provider store={store}>
                  <Submitquestion />
                </Provider>
                <Footer />
              </>
            }
          />
          <Route
            path="/Viewquestion"
            element={
              <>
                
                <Provider store={store}>
                  <Viewquestion />
                </Provider>

                <Footer />
              </>
            }
          />
          <Route
            path="/Stuanswer"
            element={
              <>
                <Provider store={store}>
                  <Stuanswer />
                </Provider>
              </>
            }
          />
          <Route
            path="/Resultpage"
            element={
              <>
                
                <Provider store={store}>
                  <Resultpage />
                  <Feedback />
                </Provider>
                {/* <Footer/> */}
              </>
            }
          />
          <Route
            path="/ViewStatus"
            element={
              <>
                <Provider store={store}>
                  <ViewStatus />
                </Provider>
              </>
            }
          />
          <Route
            path="/FeedbackList"
            element={
              <>
                {/* <Dashboard/> */}
                <Provider store={store}>
                  <FeedbackList />
                </Provider>
                <Footer/>
              </>
            }
          />

          <Route
            path="/Attendquiz"
            element={
              <>
               
                <Provider store={store}>
                  <Attendquiz />
                </Provider>
                <Footer />
              </>
            }
          />

          <Route
            path="/Showquestion"
            element={
              <>
              
                <Provider store={store}>
                  <Showquestion />
                </Provider>
                <Footer />
              </>
            }
          />
          <Route
            path="/Profile"
            element={
              <>
                <Profile />
              </>
            }
          />
          <Route
            path="/Dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
           <Route
            path="/StudentDashboard"
            element={
              <>
                <StudentDashboard />
              </>
            }
          />
           <Route
            path="/Attendquizcard"
            element={
              <>
                <Provider store={store}>
                  <Attendquizcard />
                </Provider>
                
              </>
            }
            />
            <Route
            path="/Resultpagecard"
            element={
              <>
                <Provider store={store}>
                  <Resultpagecard />
                </Provider>
              </>
            }
          />
           <Route
            path="/EduDashboardcard"
            element={
              <>
                <Provider store={store}>
                  <EduDashboardcard />
                </Provider>
                
              </>
            }
          />
          <Route
            path="/Stustatusresult"
            element={
              <>
                <Provider store={store}>
                  <Stustatusresult />
                </Provider>
                <Footer/>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Provider store={store}>
                  <Home />
                </Provider>
              </>
            }
          />

          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/Educa" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
