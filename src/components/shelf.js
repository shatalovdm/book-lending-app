import React from 'react'
import Book from './book'

const Shelf = ({shelves, books, shelfName, onShelfChange}) => {

	const shelfValue = shelves.get(shelfName)
	const booksOnTheShelf = books.filter(book => book.shelf === shelfValue)
	return (
		<div>
			<h2 className="bookshelf-title">{shelfName}</h2>
			<div className="bookshelf-books">
				{booksOnTheShelf !== 0 && (
					<ol className="books-grid">
						{booksOnTheShelf.map(book => (
							<li key={ book.id }>
								<Book 
								book={book} 
								shelfName={shelfName}
								onShelfChange={onShelfChange}
								/>
							</li>
						))}
					</ol>
				)}
			</div>
		</div>
	)
} 

export default Shelf