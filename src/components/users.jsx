import React from 'react'
import SearchStatus from './searchStatus'
import User from './user'

const Users = ({ users, onHandleDeleteUser, onHandleUpdateBookmark }) => {
	return (
		<>
			<SearchStatus length={users.length} />
			{users.length > 0 && (
				<table className="table">
					<thead>
						<tr>
							<th>Имя</th>
							<th>Качества</th>
							<th>Профессия</th>
							<th>Встретился, раз</th>
							<th>Оценка</th>
							<th>Избранное</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<User
							users={users}
							onUpdateBookmark={onHandleUpdateBookmark}
							onDeleteUser={onHandleDeleteUser}
						/>
					</tbody>
				</table>
			)}
		</>
	)
}

export default Users
