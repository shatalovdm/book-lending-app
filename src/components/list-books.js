import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './shelf'

const shelves = new Map() 

shelves.set('Currently Reading', 'currentlyReading')
shelves.set('Want to Read', 'wantToRead')
shelves.set('Read', 'read')

console.log(shelves.keys())

export default class ListBooks extends Component {

	render() {
		const shelfComponents = []
		console.log(this.props.books)
		for (const shelf of shelves.keys()) {
			shelfComponents.push (
	      		<div className="bookshelf" key={ shelf }>
	      			<Shelf 
	      				shelves={ shelves }
	      				shelfName={ shelf }
	      				books={this.props.books}
	      				onShelfChange={this.props.onShelfChange}
	      			/>
	      		</div>
			)
  		}

		return (
		<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
         		{shelfComponents}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
		)
	}
}