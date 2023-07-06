import React from 'react'
import TodoAd from './TodoAd'

export default function TodosAd(props) {
  return (
    <div>
      {props.todos.map((todo,index)=>(
        <TodoAd key={index} todo={todo.todo} id={todo.id} onRemove={props.onRemove} />
      ))}
    </div>
  )
}
