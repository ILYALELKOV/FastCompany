import React, { useEffect, useState } from 'react'
import Users from './components/users'
import api from './api'

function App() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		api.users.fetchAll().then((data) => setUsers(data))
	}, [])

	const handleDeleteUser = (id) => {
		setUsers(users.filter((users) => users._id !== id))
	}

	const handleUpdateBookmark = (id) => {
		const updatedUsers = users.map((user) => {
			if (user._id === id) {
				return { ...user, bookmark: !user.bookmark }
			}
			return user
		})
		setUsers(updatedUsers)
	}

	return (
		<Users
			onHandleDeleteUser={handleDeleteUser}
			onHandleUpdateBookmark={handleUpdateBookmark}
			users={users}
		/>
	)
}

export default App
