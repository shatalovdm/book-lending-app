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
            <Search onShelfChange={() => this.componentDidMount()}/>
          )}/>
          <Route exact path="/" render={() => (
            <ListBooks 
              onShelfChange={() => this.componentDidMount()}
              books={this.state.books}
            />
          )}/>
      </div>
    )
  }
}

export default BooksApp
