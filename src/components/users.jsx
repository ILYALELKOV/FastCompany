import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import User from './user'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import GroupList from './groupList'
import api from '../api'
import SearchStatus from './searchStatus'

const Users = ({ users, onHandleDeleteUser, onHandleUpdateBookmark }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [professions, setProfession] = useState()
	const [selectedProf, setSelectedProf] = useState()

	const pageSize = 4

	useEffect(() => {
		setCurrentPage(1)
	}, [selectedProf])

	useEffect(() => {
		api.professions.fetchAll().then((data) => setProfession(data))
	}, [])

	const handleProfessionSelect = (chosenProfession) => {
		setSelectedProf(chosenProfession)
	}

	const handlePageChange = (pageIndex) => {
		setCurrentPage(pageIndex)
	}

	const clearFilter = () => {
		setSelectedProf()
	}
	const filteredUsers = selectedProf
		? users.filter((user) => user.profession.name === selectedProf.name)
		: users

	const count = filteredUsers.length
	const userCrop = paginate(filteredUsers, currentPage, pageSize)
	if (userCrop.length === 0 && currentPage > 1) {
		setCurrentPage(currentPage - 1)
	}
	return (
		<div className="d-flex justify-content-center">
			{professions && (
				<div className="d-flex flex-column flex-shrink-0 p-2">
					<GroupList
						selectedItem={selectedProf}
						items={professions}
						onItemSelect={handleProfessionSelect}
					/>
					<button className="btn btn-warning mt-2 mt-3" onClick={clearFilter}>
						Очистить
					</button>
				</div>
			)}
			<div className="d-flex flex-column">
				<SearchStatus length={count} />
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
				<div className="d-flex justify-content-center">
					<Pagination
						itemsCount={count}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
		</div>
	)
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
	onHandleUpdateBookmark: PropTypes.func.isRequired,
	onHandleDeleteUser: PropTypes.func.isRequired
}

export default Users
