import React from 'react'
import Users from './layouts/users'
import NavBar from './components/ui/navBar'
import { Redirect, Route, Switch } from 'react-router-dom'
import Main from './layouts/main'
import Login from './layouts/login'

function App() {
	return (
		<>
			<NavBar />
			<Switch>
				<Route path="/users/:userId?/:edit?" component={Users} />
				<Route path="/login/:type?" component={Login} />
				<Route path="/" exact component={Main} />
				<Redirect to="/" />
			</Switch>
		</>
	)
}

export default App
