import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

import './fonts.css'
import './index.css'

import configureStore from './configureStore'

const store = configureStore()

render(React.createElement(Provider, { store }, React.createElement(App)), document.getElementById('root'));