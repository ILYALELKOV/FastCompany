import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
	items,
	onItemSelect,
	valueProperty,
	contentProperty,
	selectedItem
}) => {
	let data = {}

	if (Array.isArray(items)) {
		items.forEach((item) => {
			data[item[valueProperty]] = item
		})
	} else {
		data = items
	}

	const professions = Object.keys(data)
	return (
		<>
			<ul className="list-group">
				{professions.map((profession) => (
					<li
						key={data[profession][valueProperty]}
						className={
							'list-group-item' +
							(data[profession] === selectedItem ? ' active' : '')
						}
						onClick={() => onItemSelect(data[profession])}
						role="button"
					>
						{data[profession][contentProperty]}
					</li>
				))}
			</ul>
		</>
	)
}

export default GroupList

GroupList.defaultProps = {
	valueProperty: '_id',
	contentProperty: 'name'
}

GroupList.propTypes = {
	items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	onItemSelect: PropTypes.func.isRequired,
	valueProperty: PropTypes.string.isRequired,
	contentProperty: PropTypes.string.isRequired,
	selectedItem: PropTypes.object
}
