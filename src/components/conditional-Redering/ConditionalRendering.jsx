import React, { Component } from 'react'
import Home from './Home'
import SignIn from './SignIn'

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isloggedIn:true
    }
  }
  render() {
    
   if(this.state.isloggedIn){
    return<Home />
   }else{
    return<SignIn />
   }
  }
}

export default ConditionalRendering