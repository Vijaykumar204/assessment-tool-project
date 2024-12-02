import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
function Educard1(){
    return(
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card-custom">
                    <i class="fas fa-user-graduate icon"></i>
                    {/* <h3>Assessment Management</h3> */}
                    {/* <p>Play for free</p> */}
                    <Link  className="nav-link" to="/EduDashboardcard"> <button class="btn btn-custom" id="buttoncolor">Assessment Management</button>  </Link> 
                </div>
            </div>
            <div class="col-md-5">
                <div class="card-custom">
                    <i class="fas fa-robot icon"></i>
                    {/* <h3>AI</h3>
                    <p>Generate a quiz from any subject</p> */}
                    <Link  className="nav-link" to="/UserManagement"><button class="btn btn-custom" id="buttoncolor">User Management</button></Link>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Educard1;