import React, { useState } from 'react'
import SearchStatus from './searchStatus'
import User from './user'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import PropTypes from 'prop-types'

const Users = ({ users, onHandleDeleteUser, onHandleUpdateBookmark }) => {
	const [currentPage, setCurrentPage] = useState(1)

	const count = users.length
	const pageSize = 4

	const handlePageChange = (pageIndex) => {
		setCurrentPage(pageIndex)
	}

	const userCrop = paginate(users, currentPage, pageSize)

	if (userCrop.length === 0 && currentPage > 1) {
		setCurrentPage(currentPage - 1)
	}

	return (
		<>
			<SearchStatus length={users.length} />
			{count > 0 && (
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
							users={userCrop}
							onUpdateBookmark={onHandleUpdateBookmark}
							onDeleteUser={onHandleDeleteUser}
						/>
					</tbody>
				</table>
			)}
			<Pagination
				itemsCount={count}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</>
	)
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
	onHandleUpdateBookmark: PropTypes.func.isRequired,
	onHandleDeleteUser: PropTypes.func.isRequired
}

export default Users
