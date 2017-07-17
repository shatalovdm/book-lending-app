import React from 'react'
import _ from 'lodash'

function BookBack({ description, changeView }) {
	const newDescription = _.truncate(description, {
		'length': 220,
		'separator': ' '
	})
	return (
		<div onClick={changeView} className="book-cover back" style={{ width: 128, height: 193, backgroundColor: "lightgrey" }}>
			<p className="description">
				{newDescription}
			</p>
		</div>
	)
}

export default BookBack