import React from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
  const {state}=useLocation()
  return (
    <div>
      Products
      <h1>Name: {state.name}</h1>
      <h1>Age: {state.age}</h1>
    </div>
  )
}

export default Product
