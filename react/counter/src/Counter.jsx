import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
  const [count,setCount]=useState(0)
  return (
    <div className='counter'>
      <h1>Count = {count}</h1>
      <button className='inc_btn'
      onClick={()=>{
        setCount(count+1)
      }}
      >Increment</button>
      <button className='dec_btn'
      onClick={()=>{
        setCount(count-1)
      }}
      >Decrement</button>
      <button className='reset_btn'
      onClick={()=>{
        setCount(0)
      }}
      >Reset</button>
      <br />
      <input type='number' className='input' placeholder='Number'></input>
      <button className='set_btn'
      onClick={()=>{
        const num=Number(document.querySelector('.input').value);
        setCount(count+num);
        document.querySelector('.input').value=""
      }}
      
      >Set</button>
    </div>
  )
}

export default Counter
