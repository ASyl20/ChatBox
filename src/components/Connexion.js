import React from 'react'


export default class Connexion extends React.Component{

goToChat = event =>{
  // Arrete tout , enleve le fonctionnement par defaut
  event.preventDefault()
  //console.log(this.pseudoInput.value)
  const pseudo = this.pseudoInput.value
  // Changer l'url
  // Context permet au composant parent de passer des choses à tous les enfants
  // qu'il a

  this.context.router.transitionTo(`/pseudo/${pseudo}`)
}

  render(){
    return (
      <div className='connexionBox' onSubmit={(element) => this.goToChat(element)}>
        <form className='connexion'>
          <input type="text" placeholder="Pseudo" ref={(input) =>{this.pseudoInput = input}} required/>
          <button type="submit">GO</button>
        </form>
      </div>
    )
  }

// Dire au context comment avoir accès au transitionTo
// PropTypes.object c'est un elements avec pleins d'objet dedans avec transitionTo

  static contextTypes = {
    router : React.PropTypes.object
  }
}
