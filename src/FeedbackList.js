
// import React from 'react';
// import { useSelector } from 'react-redux';
// // import { Container } from 'react-bootstrap';
// import { Container,  Col,Row } from 'react-bootstrap';
// import Dashboard from './Dashboard';
// import DashHeader from './DashHeader';
   
   

// const FeedbackList = () => {
//   const submissions = useSelector((state) => state.feedback.submissions);

//   return (
//     <>
//     <DashHeader/>
//     <Container fluid>
    
//         <Row>
//         <Col md={2} className="sidebar"style={{backgroundColor:"#45A29E" }} >
//         <Dashboard/>
//         </Col>
//         <Col md={10} className="main-content" style={{backgroundColor:'lightgray'}}>
//     <Container className="mt-4 " >
//       <div style={{ backgroundColor: 'lightgray' }}>
//         <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '10px' }}>
//           <h2>Submitted Feedback</h2>
//           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//             <thead>
//               <tr>
//                 <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
//                 <th style={{ border: '1px solid #ccc', padding: '8px' }}>Test Name</th>
//                 <th style={{ border: '1px solid #ccc', padding: '8px' }}>Feedback</th>
//               </tr>
//             </thead>
//             <tbody>
//               {submissions.length === 0 ? (
//                 <tr>
//                   <td colSpan="3" style={{ textAlign: 'center', padding: '8px' }}>No feedback submitted yet</td>
//                 </tr>
//               ) : (
//                 submissions.map((submission, index) => (
//                   <tr key={index}>
//                     <td style={{ border: '1px solid #ccc', padding: '8px' }}>{submission.firstName}</td>
//                     <td style={{ border: '1px solid #ccc', padding: '8px' }}>{submission.lastName}</td>
//                     <td style={{ border: '1px solid #ccc', padding: '8px' }}>{submission.feedback}</td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </Container>
//     </Col>
//     </Row>
//     </Container>
//     </>

//   );
// };

// export default FeedbackList;




import React from 'react';
import { useSelector } from 'react-redux';
// import { Container } from 'react-bootstrap';
import { Container,  Col,Row } from 'react-bootstrap';
import Dashboard from './Dashboard';
import DashHeader from './DashHeader';
   
   

const FeedbackList = () => {
  const submissions = useSelector((state) => state.feedback.submissions);

  return (
    <>
    <DashHeader/>
    <Container fluid>
    
        <Row>
        <Col md={2} className="sidebar"style={{backgroundColor:"#45A29E" }} >
        <Dashboard/>
        </Col>
        <Col md={10} className="main-content" >
        <div className="container mt-2">
      <div className="row justify-content-center">
        <div >
          <div className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
            <h2 className="text-center mb-4">Feedback</h2>
            <table className="table table-striped" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Test Name</th>
                <th style={{ border: '1px solid #ccc', padding: '8px' }}>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {submissions.length === 0 ? (
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center', padding: '8px' }}>No feedback submitted yet</td>
                </tr>
              ) : (
                submissions.map((submission, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{submission.firstName}</td>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{submission.lastName}</td>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{submission.feedback}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
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

export default FeedbackList;
