import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Read from './read'
import WantToRead from './want-to-read'
import CurrentlyReading from './currently-reading'

export default class ListBooks extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	currentlyReading: [],
	    	wantToRead: [],
	    	read: []
	    };

  	}

	render() {
		return (
		<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              	<CurrentlyReading />
              	<WantToRead />
              	<Read />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
		)
	}
}