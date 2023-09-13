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
  const [remaining, setRemaining] = useState(20000);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setMembers(data))

  }, [])

  const handleAdd = (member) => {
    console.log("Handle Add Click")

    const find = cartsMember.find(item => item.id === member.id)

    if (!find) {
      if((remaining-member.salary)<0)
      {
         return alert("Do Not Enough Money ")
      }

      const newMember = [...cartsMember, member]
      setCartsMember(newMember);
      setTotalCost(totalCost+member.salary)
      setRemaining(remaining-member.salary)
      
    }
    else {
      alert("Already Added");
    }

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
          totalCost={totalCost}
          remaining={remaining}
        ></Carts>

      </div>


    </>
  )
}

export default App
