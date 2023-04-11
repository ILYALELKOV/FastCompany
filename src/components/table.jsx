import React from 'react'
import TableHeader from './tableHeader'
import TableBody from './tableBody'
import PropTypes from 'prop-types'

const Table = ({ onSort, selectedSort, data, columns, children }) => {
	return (
		<table className="table">
			{children || (
				<>
					<TableHeader {...{ onSort, selectedSort, columns }} />
					<TableBody {...{ columns, data }} />
				</>
			)}
		</table>
	)
}

export default Table

Table.propTypes = {
	data: PropTypes.array,
	columns: PropTypes.object,
	selectedSort: PropTypes.object,
	onSort: PropTypes.func,
	children: PropTypes.array
}