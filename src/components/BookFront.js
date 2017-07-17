import React from 'react'

function BookFront({ image, changeView }) {
	return <div onClick={changeView} className="book-cover front" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
}

export default BookFront