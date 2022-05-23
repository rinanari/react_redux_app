import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
import Card from "./Card";
import "./styles/app.less";
import Main from "./main/Main";
import Modal from "./Modal";

const App = () => {
  
  

  const dispatch = useDispatch();
  const isModal = useSelector((state)=> state.modal.isModal )
  return (
    
      <div className="container">
        <Routes location={state || location}>
          <Route path="/" element={<Main />} />         
        </Routes>
        {isModal &&(
      <Modal></Modal>
      )
}
      </div>
     
            
    
    
  );
};

export default App;
