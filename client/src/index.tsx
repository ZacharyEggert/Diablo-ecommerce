import React from 'react'
import { render } from 'react-dom'
import { Provider, ReactReduxContext } from 'react-redux'
import App from './App'

import './fonts.css'
import './index.css'

import {store} from './configureStore'


render(
  <Provider context={ReactReduxContext} store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
