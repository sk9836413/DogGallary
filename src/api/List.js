import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import './card.css'
import CardList from './CardList'
import Header from './Header';
import Search from './Search'
import Pop from './Pop'

export default function List() {

    const [data, setData] = useState([]);
    const[search,setSearch]=useState('');
    const[isPopupOpen,setPopup]=useState(false);
    const[clickedDog,setClickedDog]=useState({});

   const dogList = async(props) => {
  const response=  fetch(`https://dog.ceo/api/breeds/list/all`)
     //  setData( await response.json());
     .then(response => response.json())
     .then(breeds => {
      const dog = Object.keys(breeds.message);
       setData(dog)
     })
     .catch(error => console.log(error));
     
  } 

    useEffect(() => {
  dogList();

  
   },[]);
   const handleChange=(search)=>{
    setSearch(search);
   }

   const handleClickedPopup=(selectedDog)=>{
    // console.log(selectedDog);
    setPopup(true);
    setClickedDog(selectedDog);
  }
  const handleClose=()=>{
    setPopup(false);
    setClickedDog({});
  }


   const filteredName=data.filter((name) => {
    return name.toLowerCase().includes(search.toLowerCase())
  })





  return (
      <div>
        {isPopupOpen? <Pop names={filteredName} clickedDog={clickedDog}  handleClose={handleClose}/>:null}
          <Header names={filteredName}/>
            <Search handleChange={handleChange}/>
            <CardList names={filteredName} handleClickedPopup={handleClickedPopup}/>
            </div>
  )   
  
}
