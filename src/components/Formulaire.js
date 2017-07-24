import React from 'react'
import {render} from 'react-dom'

export default class Formulaire extends React.Component{

  state = {
    length : this.props.length
  }

createMessage = event =>{
  event.preventDefault()
  // console.log(this.message.value)
  const message = {
      message : this.message.value,
      pseudo : this.props.pseudo
  }

  this.props.addMessage(message)

  // Reset de Formulaire
  this.messageForm.reset()

  // Remettre le length du formulaire
  this.setState({length :this.props.length})

}

compteur = e =>{
  const length = this.props.length - this.message.value.length
  this.setState({length : length})
  console.log(length)
}


  render(){
    return (
      <form ref={input => this.messageForm = input} className="form" onSubmit={e => this.createMessage(e)}>
        <textarea required maxLength="140" ref={input => this.message = input} onChange={e => this.compteur(e)}></textarea>
        <div className="info">{this.state.length}</div>
        <button type="submit">Envoyer!</button>
      </form>
    )
  }

// PropTypes permet de faire la vérification
  static PropTypes = {
    // Il faut absolument que addMessage soit une fonction
    addMessage : React.PropTypes.func.isRequired,
    pseudo : React.PropTypes.string.isRequired,
    length : React.PropTypes.number.isRequired
  }

}
