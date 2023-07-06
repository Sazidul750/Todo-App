import React from 'react'
import { FaBitbucket } from "react-icons/fa6";
import './Todo.module.css'

export default function TodoAd(props) {
  const {title,description}=props.todo
  const {id}=props


  const handleClick=(id)=>{
    props.onRemove(id)
  }
  
  return (
    <div className='main'>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        
      </div>
     
        <button onClick={()=>{handleClick(id)}} ><FaBitbucket/></button>
       
    </div>
  )
}
