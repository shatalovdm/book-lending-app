import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './book'

export default class Search extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	value: '',
	    	books: []
	    };

	    this.handleChange = this.handleChange.bind(this);
  	}

	handleChange(event) {
		const value = event.target.value
		this.setState({ value })
		if (value.length === 0) {
			this.setState({
				books: []
			});
		} else {
			BooksAPI.search(event.target.value, 20).then((books) => {
				this.setState({
					books: books 
				});
			})
		}
	}

	render() {
		const books = this.state.books
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search by title or author"/>
					</div>
				</div>
				<div className="search-books-results">
						{books.length !== 0 && (
							<ol className="books-grid">
								{this.state.books.map(book => (
									<li key={ book.id }>
										<Book book={book} />
									</li>
								))}
							</ol>
						)}
				</div>
			</div>
		)
	}
}