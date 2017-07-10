import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'

class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {shelf: props.book.shelf};

		this.updateShelf = this.updateShelf.bind(this);
	}

	componentDidMount() {
		this.setState({
			shelf: this.props.book.shelf
		})
	}

	updateShelf = (shelf) => {
		BooksAPI.update(this.props.book, shelf)
		this.setState({ shelf })
	}

	render() {
		const book = this.props.book
		return (
	        <div className="book">
	          	<div className="book-top">
	            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
	            <div className="book-shelf-changer">
					<select 
						onChange={(event) => {
							this.updateShelf(event.target.value); 
							this.props.onShelfChange()
						}} 
						value={this.state.shelf}>
						<option value="none" disabled>Move to...</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
	            </div>
	          	</div>
	          	<div className="book-title">{book.title}</div>
	          	<div className="book-authors">{(book.authors)}</div>
	        </div>
		)
	}
}

export default Book