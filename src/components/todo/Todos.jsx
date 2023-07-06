import React from 'react'
import Todo from './Todo'

export default function Todos(prosps) {
  return (
    <div>
        {prosps.todos.map((todo,index)=>(
            <Todo key={index} todo={todo} />
        ))}
    </div>
  )
}
