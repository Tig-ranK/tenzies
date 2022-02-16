import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Stopwatch from './components/Stopwatch'
import './styles.scss'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Stopwatch />
  </React.StrictMode>, document.getElementById('root')
)