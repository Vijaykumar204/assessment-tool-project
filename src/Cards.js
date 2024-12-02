import React from "react";
import cimg from './image/java.png';
import 'bootstrap/dist/css/bootstrap.css';
import c from "./image/java.png";
function Cards({source,cardtittle}){
    return(
        
    //     <div class="container">
    //     <h2 class="text-center mt-4">Programming Language</h2>
    //     <div class="row justify-content-center">
    //         <div class="col-6 col-sm-4 col-md-3 col-lg-2">
    //             <div class="card-custom2 h-75">
    //               <a href="#"> <img src={c} alt="C Language" class="language-image h-75"/></a> 
    //                 <div class="language-name">C Language</div>
    //             </div>
    //         </div>
    //         <div class="col-6 col-sm-4 col-md-3 col-lg-2">
    //             <div class="card-custom2 h-75">
    //                 <a href="#">  <img src={c} alt="Java" class="language-image h-75"  /> </a>
    //                 <div class="language-name">Java</div>
    //             </div>
    //         </div>
    //         <div class="col-6 col-sm-4 col-md-3 col-lg-2">
    //             <div class="card-custom2 h-75">
    //                 <a href="#"> <img src={c} alt="Python" class="language-image h-75" /> </a>
    //                 <div class="language-name">Python</div>
    //             </div>
    //         </div>
    //         <div class="col-6 col-sm-4 col-md-3 col-lg-2">
    //             <div class="card-custom2 h-75">
    //                 <a href="#">  <img src={c} alt="HTML" class="language-image h-75" /></a>
    //                 <div class="language-name">HTML</div>
    //             </div>
    //         </div>
    //         <div class="col-6 col-sm-4 col-md-3 col-lg-2">
    //             <div class="card-custom2 h-75">
    //                 <a href="#">  <img src={c} alt="JavaScript" class="language-image h-75" /> </a>
    //                 <div class="language-name">JavaScript</div>
    //             </div>
    //         </div>
    //         <div class="col-6 col-sm-4 col-md-3 col-lg-2">
    //             <div class="card-custom2 h-75">
    //                 <a href="#">  <img src={c} alt="React" class="language-image h-75  "/></a>
    //                 <div class="language-name">React</div>
    //             </div>
    //         </div>
    //     </div>
    //  </div>  
    // <div className="container-fluid">
    <>
    {/* <h1>Programing Language</h1> */}
    <div className="card col-sm-2" style={{ width: '9.5rem' }}>
      <img className="card-img-top" src={source} alt="Card image cap" style={{ marginLeft:0 ,marginTop:10,height:150}}  />
      <div className="card-body">
        <h5 className="card-title " style={{textAlign:'center'}}>{cardtittle}</h5>
        
      </div>
    </div>
   
   </>
    );
}
export default Cards;