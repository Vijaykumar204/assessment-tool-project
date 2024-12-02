import React,{useState} from "react";
import "./App.css";
function Button2(props){
    const[button,setBut]=useState(props.value);
    const trans=()=>{
        switch(button){
            case 'Log In':
                setBut('Submit');
                alert('Successfully Logged In');
                break;
            case 'Submit':
                setBut('Reset');
                alert("Successfully Submitted");
                break;
            case 'Reset':
                setBut('Log Out');
                alert('Value are Resetted');
                break;
            case 'Log Out':
                setBut('Log In');
                alert('Successfully Logged Out');
                break;
        }
    }
    return(
        <div>
             <input type="button" value={button} id="fg1" class="nav-link mr-5 rounded" onClick={trans}/>
             {/* <button value={button} id="fg1" class="nav-link mr-5 rounded" onClick={trans}></button> */}
        </div>
    )
}
export default Button2;