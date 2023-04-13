import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const TableBody = ({ data, columns, onHandleSave }) => {
	const renderContent = (item, column) => {
		if (columns[column].component) {
			const component = columns[column].component
			if (typeof component === 'function') {
				return component(item)
			}
			return component
		}
		return _.get(item, columns[column].path)
	}

	return (
		<tbody>
			{data.map((item) => (
				<tr key={item._id}>
					{Object.keys(columns).map((column, index) => (
						<td key={column}>
							{index === 0 ? (
								<a
									onClick={() => {
										onHandleSave(item)
									}}
									style={{ cursor: 'pointer' }}
								>
									<span className="mx-3 fs-5">
										{renderContent(item, column)}
									</span>
								</a>
							) : (
								<span className="mx-3 fs-5">{renderContent(item, column)}</span>
							)}
						</td>
					))}
				</tr>
			))}
		</tbody>
	)
}

export default TableBody

TableBody.propTypes = {
	data: PropTypes.array.isRequired,
	columns: PropTypes.object.isRequired,
	onHandleSave: PropTypes.func.isRequired
}
