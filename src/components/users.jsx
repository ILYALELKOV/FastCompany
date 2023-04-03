import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import GroupList from './groupList'
import api from '../api'
import SearchStatus from './searchStatus'
import UsersTable from './usersTable'
import Loader from './loader'

const Users = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [professions, setProfession] = useState()
	const [selectedProf, setSelectedProf] = useState()
	const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })
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

	const handleSort = (item) => {
		setSortBy(item)
	}
	if (users) {
		const filteredUsers = selectedProf
			? users.filter(
					(user) =>
						JSON.stringify(user.profession) === JSON.stringify(selectedProf)
			  )
			: users

		const count = filteredUsers.length
		const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
		const userCrop = paginate(sortedUsers, currentPage, pageSize)
		if (userCrop.length === 0 && currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
		return (
			<div className="d-flex justify-content-center mt-5">
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
						<UsersTable
							selectedSort={sortBy}
							onSort={handleSort}
							onDeleteUser={handleDeleteUser}
							onUpdateBookmark={handleUpdateBookmark}
							users={userCrop}
							onDelete={handleDeleteUser}
							onToggleBookmark={handleUpdateBookmark}
						/>
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
	return <Loader />
}

export default Users
