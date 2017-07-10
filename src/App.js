import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Search from './components/search'
import ListBooks from './components/list-books'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  updateBookShelf = (book, shelf) => {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
      })
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const selectedBooks = books.filter(book => book.shelf !== 'none')
      this.setState({
        books: selectedBooks 
      })
    })
  }

  render() {
    return (
      <div className="app">
          <Route path="/search" render={({history}) => (
            <Search onShelfChange={(book, shelf) => this.updateBookShelf(book, shelf)}/>
          )}/>
          <Route exact path="/" render={() => (
            <ListBooks 
              onShelfChange={(book, shelf) => this.updateBookShelf(book, shelf)}
              books={this.state.books}
            />
          )}/>
      </div>
    )
  }
}

export default BooksApp
