import React from 'react'
import Child from './Child'

export default function Parents() {
    const handleTodo=(todo)=>{
        console.log(todo)
    }
  return (
    <div>
        <Child  onTodo={handleTodo} />
    </div>
  )
}
