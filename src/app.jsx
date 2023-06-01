import React from 'react'
import Users from './layouts/users'
import NavBar from './components/ui/navBar'
import { Redirect, Route, Switch } from 'react-router-dom'
import Main from './layouts/main'
import Login from './layouts/login'
import Edit from './components/page/edit'

function App() {
	return (
		<>
			<NavBar />
			<Switch>
				<Route path="/users/:userId/:edit" component={Edit} />
				<Route path="/users/:userId?" component={Users} />
				<Route path="/login/:type?" component={Login} />
				<Route path="/" component={Main} />
				<Redirect to="/" />
			</Switch>
		</>
	)
}

export default App
