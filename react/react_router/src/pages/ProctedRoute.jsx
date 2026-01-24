import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProctedRoute = ({cmp}) => {
  const navigate=useNavigate();
  let isLogin=true
  let x=10
  useEffect(()=>{
    if(!isLogin){
      navigate("/login")
    }
  },[x])
  return cmp
}

export default ProctedRoute

