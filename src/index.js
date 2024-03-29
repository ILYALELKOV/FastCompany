import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
