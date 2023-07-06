import React, { useState } from 'react'

export default function Decrement() {
  const [count,setCount]=useState(0)
  const handleDecrement=()=>{
    setCount(count-1)
    setCount(count-1)
    setCount(count-1)
  }
  return (
    <div>
      <h1>Count: {count}</h1>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}
