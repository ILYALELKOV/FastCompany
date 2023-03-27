import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
	items,
	onItemSelect,
	valueProperty,
	contentProperty,
	selectedItem
}) => {
	const professions = Object.keys(items)
	return (
		<>
			<ul className="list-group">
				{professions.map((profession) => (
					<li
						key={items[profession][valueProperty]}
						className={
							'list-group-item' +
							(items[profession] === selectedItem ? ' active' : '')
						}
						onClick={() => onItemSelect(items[profession])}
						role="button"
					>
						{items[profession][contentProperty]}
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
