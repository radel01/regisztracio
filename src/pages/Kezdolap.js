import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';

function Kezdolap() {
  
  const {user}=useContext(AuthContext);
  return (
    <div>Kezdolap
    {user.name}</div>
  )
}

export default Kezdolap