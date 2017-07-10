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
			this.setState({ books: [] })
		} else {
			BooksAPI.search(value, 50).then((books) => {
				if (books.error) {
					this.setState({ books: [] })
				} else {
					this.setState({ books })
				}
			})
		}
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search by title or author"/>
					</div>
				</div>
				<div className="search-books-results">
						{this.state.books.length !== 0 && (
							<ol className="books-grid">
								{this.state.books.map(book => (
									<li key={ book.id }>
										<Book 
										book={book}
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