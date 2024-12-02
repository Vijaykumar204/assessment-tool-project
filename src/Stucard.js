import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
function Stucard(){
    return(
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card-custom">
                    <i class="fas fa-user-graduate icon"></i>
                    <h3>View Quiz</h3>
                    
                    <Link  className="nav-link" to="/Attendquiz"> <button class="btn btn-custom" id="buttoncolor">View Quiz</button>  </Link> 
                </div>
            </div>
           
        </div>
    </div>
    );
}
export default Stucard;