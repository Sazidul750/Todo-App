import React, { Component } from 'react'

export default class EventHandler extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
       count:0
    }
  }
  handleIncrement=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
    
   
  render() {
    return (
      <div>
       <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement} disabled={this.state.count===6?true:false} >+</button>
      </div>
    )
  }
}
