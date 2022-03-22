import React from 'react';
import './Header.css';
import { useState } from 'react';
import Popup   from './Popup'




export default function Header(names) {

  const [isCostum, SetCostum] = useState(false);
 function customsearch(){

  SetCostum(true);
  console.log("button clicked");
  console.log(isCostum);

  }
 
 
  function customClose(){

    SetCostum(false);
    console.log(isCostum);
  
    }



    
  return (
    <>
    <div className="header">
        <h1 className="header1">DOG GALLARY </h1>
        <button className="button"onClick={customsearch}>Costum Search</button>
        {isCostum? <Popup names = {names} handleCustomClose={customClose} handleClickedCustom={customsearch}/> :null}
    </div>


    
    </>
  );
}
