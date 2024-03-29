import React from 'react'
import { useParams } from 'react-router-dom'
import UserPage from '../components/page/userPage/userPage'
import UsersListPage from '../components/page/userListPage/usersListPage'
import EditUserPage from '../components/page/edit'

const Users = () => {
	const params = useParams()
	const { userId, edit } = params
	return (
		<>
			{userId ? (
				edit ? (
					<EditUserPage />
				) : (
					<UserPage userId={userId} />
				)
			) : (
				<UsersListPage />
			)}
		</>
	)
}

export default Users
