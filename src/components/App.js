import React from 'react'
import {render} from 'react-dom'

import Formulaire from './Formulaire'
import Message from './Message'

// Import de firebase
import base from '../base'

// css
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animation.css'




export default class App extends React.Component{


  // Au moment il se monte

  componentWillMount(){
    // On syncronise le state
    // Chemin de la racine
    // Le context c'est this notre component
    // On veut lui passer notre message
    this.ref = base.syncState('/', {
      context : this,
      state: 'messages'
    })
  }

// Dès qu'il y a une mise à jour
  componentDidUpdate(){
    // Mettre le scroll en base
    // Permet au scroll d'aller vers le bas
    this.messages.scrollTop = this.messages.scrollHeight
  }


  state = {
    messages: {}
  }

addMessage = message =>{
  // Copier le state
  // Pour pas venir travailler directement dessus
  // ... veut dire  : recupere  tout ce que tu trouve dans ce que je vais te donner
  // ... ES6 et c'est un Shred
  const messages = {...this.state.messages}
  // On ajoute le message avec une clé timestamp
  // Création de timestamp
  const timestamp = Date.now();
  messages[`message-${timestamp}`] = message
  // Mettre à jour notre state

  // On supprime si plus de 10 messages
  Object.keys(messages).slice(0,-10).map(key => messages[key] = null)
  this.setState({messages : messages})

}

isUser = (pseudo) => {
  return pseudo === this.props.params.pseudo
}

  render(){

    const messages = Object.keys(this.state.messages).map(key => <Message key={key} details={this.state.messages[key]}  isUser={this.isUser} />)
    // console.log(messages)
// Enter toute la phase de transition avant qu'il soit réellement afficher
    return (
      <div className='box'>
        <div className="messages" ref={input => this.messages = input}>
          <ReactCSSTransitionGroup
            component="div"
            className="message"
            transitionName="message"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
            >{messages}
          </ReactCSSTransitionGroup>
        </div>
        <Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length={140}/>
      </div>
    )
  }

  static PropTypes = {
    params : React.PropTypes.object.isRequired
  }
}
