import React from 'react'

const Qualitie = ({ user }) => {
	return (
		<>
			{user.qualities.map((item) => (
				<span key={item._id} className={'m-1 badge bg-' + item.color}>
					{item.name}
				</span>
			))}
		</>
	)
}

export default Qualitie
