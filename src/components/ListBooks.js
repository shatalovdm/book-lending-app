import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'


const ListBooks = ({onShelfChange, books}) => {
	const shelves = new Map() 

	shelves.set('Currently Reading', 'currentlyReading')
	shelves.set('Want to Read', 'wantToRead')
	shelves.set('Read', 'read')

	const shelfComponents = []

	for (const shelf of shelves.keys()) {
		shelfComponents.push (
      		<div className="bookshelf" key={ shelf }>
      			<Shelf 
      				shelves={ shelves }
      				shelfName={ shelf }
      				books={ books }
      				onShelfChange={ onShelfChange }
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

export default ListBooks