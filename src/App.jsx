/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Members from './components/Members/Members'
import { useEffect } from 'react';
0
function App() {

  const [members, setMembers] = useState([]);
  const [cartsMember, setCartsMember] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setMembers(data))

  }, [])

  const handleAdd =(member) =>{
    console.log("Handle Add Click")
    const newMember =[...cartsMember,member]
    setCartsMember(newMember);
  }



  return (
    <>
      <div className='flex justify-between'>
        <Members
          members={members}
          handleAdd={handleAdd}
          
        ></Members>
        <Carts
        className='bg-green-200'
          cartsMember={cartsMember}
        ></Carts>

      </div>


    </>
  )
}

export default App
