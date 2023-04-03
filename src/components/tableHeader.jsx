import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columns }) => {
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
	const handleRenderCaret = (column) => {
		if (
			selectedSort &&
			selectedSort.path &&
			selectedSort.path.substring(0, 3) === column.substring(0, 3)
		) {
			if (selectedSort.order === 'asc') {
				return <i className="bi bi-caret-up-fill"></i>
			} else {
				return <i className="bi bi-caret-down-fill"></i>
			}
		} else {
			return null
		}
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
									  }
									: undefined
							}
							{...{ role: columns[column].path && 'button' }}
						>
							{columns[column].name}
							{handleRenderCaret(column)}
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
