// import React from 'react';
// // import "./Educator.css";
// import "./Footer.css";

// const Footer = () => {
//     return (
//         <>
//          {/*  */}
//             <footer className="footer">
//                 <div className="foot">
//                     <div className="icons-col">
//                         <br/>
//                         <a href="#" id="foot_icon" style={{paddingLeft:'10px'}}><i className="fa-brands fa-instagram"></i></a >
//                         <a href="#" id="foot_icon" style={{paddingLeft:'10px'}}><i className="fa-brands fa-facebook"></i></a>
//                         <a href="#" id="foot_icon" style={{paddingLeft:'10px'}}><i className="fa-brands fa-twitter"></i></a>
//                         <a href="#" id="foot_icon" style={{paddingLeft:'10px'}}><i className="fa-brands fa-youtube"></i></a>
//                         <a href="#" id="foot_icon" style={{paddingLeft:'10px'}}><i className="fa-brands fa-tiktok"></i></a>
//                     </div>
//                     <div className="icons-col">
//                         <ul style={{ marginTop: '10px' }}>
//                             <p className="footer_p">Homes</p> 
//                             <br/>
//                             <a href="#">
//                                 <li>About Online Assessment</li>
//                             </a>
//                             <a href="#">
//                                 <li>Register</li>
//                             </a>
//                             <a href="#">
//                                 <li>Contact Us</li>
//                             </a>
//                             <a href="#">
//                                 <li>Terms / Privacy</li>
//                             </a>
//                         </ul>
//                     </div>
//                     <div className="icons-col">
//                         <ul style={{ marginTop: '10px' }}>
//                             <p className="footer_p">Resources</p>
//                             <br/>
//                             <a href="#">
//                                 <li>Explore Content</li>
//                             </a>
//                             <a href="#">
//                                 <li>Blog</li>
//                             </a>
//                             <a href="#">
//                                 <li>YouTube</li>
//                             </a>
//                             <a href="#">
//                                 <li>Webinars</li>
//                             </a>
//                         </ul>
//                     </div>
//                     <div className="icons-col">
//                         <ul style={{ marginTop: '10px' }}>
//                             <p className="footer_p">Terms & Conditions</p>
//                             <br/>
//                             <a href="#">
//                                 <li>Careers</li>
//                             </a>
//                             <a href="#">
//                                 <li>Privacy Policy</li>
//                             </a>
//                             <a href="#">
//                                 <li>Student Privacy Policy</li>
//                             </a>
//                             <a href="#">
//                                 <li>Inclusion and Accessibility Policy</li>
//                             </a>
//                         </ul>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     );
// }

// export default Footer;
import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="foot">
                    <div className="icons-col">
                        <br/>
                        <a href="https://www.instagram.com/vijay._204/?next=%2Fy" id="foot_icon" style={{paddingLeft:'10px'}}><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" id="foot_icon" style={{paddingLeft:'10px'}}><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" id="foot_icon" style={{paddingLeft:'10px'}}><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" id="foot_icon" style={{paddingLeft:'10px'}}><i className="fa-brands fa-youtube"></i></a>
                        <a href="#" id="foot_icon" style={{paddingLeft:'10px'}}><i className="fa-brands fa-tiktok"></i></a>
                    </div>
                    <div className="icons-col">
                        <ul style={{ marginTop: '10px' }}>
                            <p className="footer_p">Homes</p> 
                            <br/>
                            <a href="#">
                                <li>About Online Assessment</li>
                            </a>
                            <a href="#">
                                <li>Register</li>
                            </a>
                            <a href="#">
                                <li>Contact Us</li>
                            </a>
                            <a href="#">
                                <li>Terms / Privacy</li>
                            </a>
                        </ul>
                    </div>
                    <div className="icons-col">
                        <ul style={{ marginTop: '10px' }}>
                            <p className="footer_p">Resources</p>
                            <br/>
                            <a href="#">
                                <li>Explore Content</li>
                            </a>
                            <a href="#">
                                <li>Blog</li>
                            </a>
                            <a href="#">
                                <li>YouTube</li>
                            </a>
                            <a href="#">
                                <li>Webinars</li>
                            </a>
                        </ul>
                    </div>
                    <div className="icons-col">
                        <ul style={{ marginTop: '10px' }}>
                            <p className="footer_p">Terms & Conditions</p>
                            <br/>
                            <a href="#">
                                <li>Careers</li>
                            </a>
                            <a href="#">
                                <li>Privacy Policy</li>
                            </a>
                            <a href="#">
                                <li>Student Privacy Policy</li>
                            </a>
                            <a href="#">
                                <li>Inclusion and Accessibility Policy</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                  <a href="https://www.instagram.com/vijay._204/?next=%2F" > <p style={{color:'whitesmoke',textDecoration:'none'}}>&copy; {new Date().getFullYear()} Vijaykumar Creation</p></a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
