import React from 'react'
import {render} from 'react-dom'

//Components
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'
import App from './components/App'

//CSS
import './index.css'

//Router
import {BrowserRouter , Match , Miss} from 'react-router'
/* BrowserRouter component qui a plusieurs options de router
* Match si l'adress correspond à ça emmene moi vers tel components
* Miss si y a rien qui Match , affiche component
*/

const Root = () =>{
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={Connexion} />
        <Match exactly pattern='/pseudo/:pseudo' component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(
  <Root/>,document.getElementById('root')
)
