import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }
  //Errors grabber
  static getDerivedStateFromError(error){
    return { hasError: true }
  }
  render() {
    if(this.state.hasError){
      return  <div 
        style={{
          margin:'30px auto',
          fontSize:40, 
          width:'70%',
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
        }}
        >
        <p>We fucked up , sorry br@</p> 
        <p>Please come back later </p>
      </div>
    } 

    return this.props.children
  }
}