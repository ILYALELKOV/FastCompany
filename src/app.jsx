import React from 'react'
import Users from './components/users'
import NavBar from './components/navBar'
import { Route, Switch } from 'react-router-dom'
import Main from './layouts/main'
import Login from './layouts/login'
import UserPage from './components/userPage'

function App() {
	return (
		<>
			<NavBar />
			<Switch>
				<Route path="/users/:userId?" component={Users} />
				<Route path="/login" component={Login} />
				<Route path="/user" component={UserPage} />
				<Route path="/" component={Main} />
			</Switch>
		</>
	)
}

export default App
