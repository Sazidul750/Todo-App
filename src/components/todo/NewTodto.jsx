import React, { useState } from 'react'

export default function NewTodto(props) {
    const [todo,setTodo]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
       props.onTodos(todo)
    }
    const handleChange=(e)=>{
        setTodo(e.target.value)
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="todo">New Todo: </label>
                <input type="text" name="todo" id="todo" required onChange={handleChange} value={todo} />
                <button>Add Todo</button>
            </div>
        </form>
    </div>
  )
}
