import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columns }) => {
	const [selectedColumn, setSelectedColumn] = useState(null)
	const handleSort = (item) => {
		if (selectedSort.path === item) {
			onSort({
				...selectedSort,
				order: selectedSort.order === 'asc' ? 'desc' : 'asc'
			})
		} else {
			onSort({ path: item, order: 'asc' })
		}
	}

	const renderCaret = (column) => {
		if (selectedColumn === column) {
			return selectedSort.order === 'asc' ? (
				<i className="bi bi-caret-up-fill"></i>
			) : (
				<i className="bi bi-caret-down-fill"></i>
			)
		} else {
			return null
		}
	}

	const handleClick = (column) => {
		setSelectedColumn(column)
	}

	return (
		<>
			<thead>
				<tr>
					{Object.keys(columns).map((column) => (
						<th
							key={column}
							onClick={
								columns[column].path
									? () => {
											handleSort(columns[column].path)
											handleClick(column)
									  }
									: undefined
							}
							{...{ role: columns[column].path && 'button' }}
						>
							{columns[column].name}
							{renderCaret(column)}
						</th>
					))}
				</tr>
			</thead>
		</>
	)
}

export default TableHeader

TableHeader.propTypes = {
	onSort: PropTypes.func.isRequired,
	selectedSort: PropTypes.object.isRequired,
	columns: PropTypes.object.isRequired
}
