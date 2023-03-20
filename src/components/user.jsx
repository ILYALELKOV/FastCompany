import React from 'react'
import Qualitie from './qualitie'
import Bookmark from './bookmark'
import PropTypes from 'prop-types'

const User = ({ users, onUpdateBookmark, onDeleteUser }) => {
	return (
		<>
			{users.map((user) => (
				<tr key={user._id}>
					<td>
						<span className="fs-5">{user.name}</span>
					</td>
					<td>
						<Qualitie user={user} />
					</td>
					<td>
						<span className="mx-3 fs-5">{user.profession.name}</span>
					</td>
					<td>
						<span className="mx-5 fs-5">{user.completedMeetings}</span>
					</td>
					<td>
						<span className="mx-2 fs-5">{user.rate + ' / 5'}</span>
					</td>
					<td>
						<Bookmark
							bookmark={user.bookmark}
							onUpdateBookmark={onUpdateBookmark}
							id={user._id}
						/>
					</td>
					<td>
						<button
							className="btn btn-danger btn-lg"
							onClick={() => onDeleteUser(user._id)}
						>
							delete
						</button>
					</td>
				</tr>
			))}
		</>
	)
}

User.propTypes = {
	users: PropTypes.array.isRequired,
	onUpdateBookmark: PropTypes.func.isRequired,
	onDeleteUser: PropTypes.func.isRequired
}

export default User
