import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
function Educontent(){
    return(
        <div class="container mt-3">
        <div class="row text-center">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <div class="icon-item" >
                    <i class="fas fa-home icon" style={{fontSize:50}} ></i>
                    <div class="icon-text mt-0">Home</div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <div class="icon-item">
                    <i class="fas fa-code icon" style={{fontSize:50}}></i>
                    <div class="icon-text mt-0">Program</div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <div class="icon-item">
                    <i class="fas fa-pen-fancy icon" style={{fontSize:50}}></i>
                    <div class="icon-text mt-0">Aptitude</div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <div class="icon-item">
                    <i class="fas fa-star icon" style={{fontSize:50}}></i>
                    <div class="icon-text mt-0">Fun</div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <div class="icon-item">
                    <i class="fas fa-futbol icon" style={{fontSize:50}} ></i>
                    <div class="icon-text mt-0">Sports</div>
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2">
                <div class="icon-item">
                    <i class="fas fa-atom icon" style={{fontSize:50}} ></i>
                    <div class="icon-text mt-0">Science</div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Educontent;