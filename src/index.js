import React from 'react'
import ReactDom from 'react-dom'
import AnApp from './AnApp'

import 'uimini'

import './assets/scss/main.scss'

ReactDom.render(
  <React.StrictMode>
    <AnApp defName='Dud' defLastName='Johh' defTextArea='Писать о себе всякое дерьмо'/>
  </React.StrictMode>,
  document.getElementById('app')
)
