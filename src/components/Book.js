import React, { Component } from 'react'
import BookFront from './BookFront'
import BookBack from './BookBack'

class Book extends Component {
	constructor(props) {
		super(props)
		this.state = {
			shelf: this.props.book.shelf,
			isOpen: false
		}
		this.changeShelf = this.changeShelf.bind(this)
		this.changeView = this.changeView.bind(this)
	}

	changeShelf(book, shelf) {
		this.setState({ shelf }) 
		this.props.onShelfChange(book, shelf) 
	}

	changeView() {
	    this.setState({
	        isOpen: !this.state.isOpen
	    });
	}

	render() {
		const book = this.props.book
		return (
	        <div className="book">
	        	<div className="book-top">
	        		<div className={"cover" + (this.state.isOpen ? " open" : "")}>
	        			<BookFront
	        				changeView={this.changeView}
	        				image={book.imageLinks.smallThumbnail} 
	        			/>
	        			<BookBack
	        				changeView={this.changeView}
	        				description={book.description} 
	        			/>
	        		</div>
		            <div className="book-shelf-changer">
						<select 
						onChange={(event) => this.changeShelf(book, event.target.value)}
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
	          	<div className="book-authors">
	          		{book.authors && book.authors.join(", ")}
	          	</div>
	        </div>
		)
	}
}

export default Book