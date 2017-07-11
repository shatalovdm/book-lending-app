import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Search from './Search'
import ListBooks from './ListBooks'
import NotFound from './NotFound'
import * as BooksAPI from '../BooksAPI'
import '../App.css'

export default class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const selectedBooks = books.filter(book => book.shelf !== 'none')
      this.setState({
        books: selectedBooks
      })
    })
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

  // searchBooks = (value) => {
  //   BooksAPI.search(value, 50).then 
  // }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route 
            exact path="/" 
            render={() => (
                <ListBooks 
                  onShelfChange={(book, shelf) => this.updateBookShelf(book, shelf)}
                  books={this.state.books}
                />
            )}
          />
          <Route 
            path="/search" 
            render={() => (
                <Search 
                  books={this.state.books}
                  onShelfChange={(book, shelf) => this.updateBookShelf(book, shelf)}
                />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
