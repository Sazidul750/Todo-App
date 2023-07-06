import React, { useState } from 'react'


export default function NewTodoAd(props) {
  const [user,setUser]=useState({title:'',description:''})
  const {title,description}=user
  const handleChange = (event) => {
    const name=event.target.name
    setUser((oldTodo)=>{
      return{...oldTodo,[name]:event.target.value}
    })
    
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    props.onTodo(user)
    setUser({title:'',description:''})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" onChange={handleChange} value={title} />
          
        </div>
        <div>
          <label htmlFor="description">description:</label>
          <textarea type="text" name="description" id="description" onChange={handleChange} value={description} />

        </div>
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}
