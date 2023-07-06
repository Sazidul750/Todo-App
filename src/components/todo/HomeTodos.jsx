import React, { useState } from 'react'
import Todos from './Todos'
import NewTodto from './NewTodto'

export default function HomeTodos() {
  const dummytodos=["todo1","todo2"]
  const [todos,setTodos]=useState(dummytodos)
  const handleTodos=(newTodos)=>{
   setTodos([...todos,newTodos])
  }

  return (
    <div>
      <NewTodto onTodos={handleTodos} />
      <Todos todos={todos} />
    </div>
  )
}
