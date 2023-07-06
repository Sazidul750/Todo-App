import React from 'react'

function Propagation() {

    const parents=(event)=>{
        console.log("parents event",event)
    }

    const handlePropagation=(event)=>{
        event.stopPropagation()
        console.log("child Event",event)
    }
  return (
    <div onClick={parents}>
        <h1>Welcome</h1>
        <button onClick={handlePropagation}>Click Me</button>
    </div>
  )
}

export default Propagation