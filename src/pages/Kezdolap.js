import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';

function Kezdolap() {
  
  const {user}=useContext(AuthContext);
  return (
    <div>Kezdolap
    {user?user.name:"Nincs bejelentkezett felhasználó"}</div>
  )
}

export default Kezdolap