import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from './bookmark'
import Button from '../UI/button'
import QualitiesList from './qualitiesList'
import Table from './table'

const UsersTable = ({
	onUpdateBookmark,
	onDeleteUser,
	users,
	selectedSort,
	onSort,
	onHandleSave
}) => {
	const columns = {
		name: { path: 'name', name: 'Имя' },
		qualities: {
			name: 'Качества',
			component: (users) => <QualitiesList user={users} />
		},
		professions: { path: 'profession.name', name: 'Профессия' },
		completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
		rate: { path: 'rate', name: 'Оценка' },
		bookmark: {
			path: 'bookmark',
			name: 'Избранное',
			component: (user) => (
				<Bookmark
					bookmark={user.bookmark}
					onUpdateBookmark={onUpdateBookmark}
					id={user._id}
				/>
			)
		},
		delete: {
			component: (user) => (
				<Button onDeleteUser={onDeleteUser} user={user}>
					delete
				</Button>
			)
		}
	}

	return (
		<Table
			onSort={onSort}
			selectedSort={selectedSort}
			columns={columns}
			data={users}
			onHandleSave={onHandleSave}
		/>
	)
}

export default UsersTable

UsersTable.propTypes = {
	users: PropTypes.array.isRequired,
	onUpdateBookmark: PropTypes.func.isRequired,
	onDeleteUser: PropTypes.func.isRequired,
	selectedSort: PropTypes.object.isRequired,
	onSort: PropTypes.func.isRequired,
	onHandleSave: PropTypes.func.isRequired
}
