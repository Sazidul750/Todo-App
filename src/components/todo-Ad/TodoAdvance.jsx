import React, { useState } from 'react'
import NewTodoAd from './NewTodoAd'
import TodosAd from './TodosAd';
import {v4 as uuidv4} from 'uuid'

export default function TodoAdvance() {
 const [todos,setTodos]=useState([])
 const handleTodos=(todo)=>{
  setTodos((prevTodos)=>{
    return[...prevTodos,{id:uuidv4(),todo}]
  })
 }
 const handleRemove=(id)=>{
 const filter=todos.filter((todo)=>todo.id!==id)
 setTodos(filter)
 }
 
  return (
    <div>
      <NewTodoAd onTodo={handleTodos} />
      <TodosAd todos={todos} onRemove={handleRemove}  />
    </div>
  )
}
