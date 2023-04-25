import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
	items,
	onItemSelect,
	valueProperty,
	contentProperty,
	selectedItem
}) => {
	const itemList = Array.isArray(items) ? items : Object.values(items)

	return (
		<ul className="list-group">
			{itemList.map((item) => (
				<li
					key={item[valueProperty]}
					className={
						'list-group-item' + (item === selectedItem ? ' active' : '')
					}
					onClick={() => onItemSelect(item)}
					role="button"
				>
					{item[contentProperty]}
				</li>
			))}
		</ul>
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
