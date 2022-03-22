import React from 'react';
import './Search.css'

export default function Search({handleChange}) {
  return (
    <>
        <div className="Search">
            <input placeholder="Type Here To Filter By Breed" onChange={(e)=>handleChange(e.target.value)}></input>



        </div>
    


    
    </>
  );
}