import React, { Component } from 'react'
import Book from './book'

export default class Shelf extends Component {

	render() {
		const shelfValue = this.props.shelves.get(this.props.shelfName)
		const booksOnTheShelf = this.props.books.filter(book => book.shelf === shelfValue)
		console.log(booksOnTheShelf)
		const shelf = this.props.shelfName
		return (
			<div>
				<h2 className="bookshelf-title">{shelf}</h2>
				<div className="bookshelf-books">
					{booksOnTheShelf !== 0 && (
						<ol className="books-grid">
							{booksOnTheShelf.map(book => (
								<li key={ book.id }>
									<Book 
									book={book} 
									shelfName={shelf}
									onShelfChange={this.props.onShelfChange}
									/>
								</li>
							))}
						</ol>
					)}
				</div>
			</div>
		)
	}
} 