import React from 'react'
import {render} from 'react-dom'

export default class Message extends React.Component{

// Avant le rendu

preRender = (isUser) => {
  if(isUser){
    return(
      <p className="user-message">
        {this.props.details.message}
      </p>
    )
  }else{
    return(
      <p className="not-user-message">
        <strong>{this.props.details.pseudo}:</strong>
        {this.props.details.message}
      </p>
    )
  }
}

  render(){
    return (
      this.preRender(this.props.isUser(this.props.details.pseudo))
    )
  }

  static PropTypes = {
    details : React.PropTypes.object.isRequired
  }
}
