import React from "react";
import Header1 from "./Header1";

import store from "./Storeq"; 
import { Provider } from "react-redux";
import Footer from "./footer";
import Submitquestion from "./Submitquestion";

  
function ViewStatus(){
    return(
        <>
           {/* <Header1/>
           <Provider store={store}>
                <Submitquestion />
                </Provider>
            <Footer/> */}
         
        </>
    );
}
export default ViewStatus;