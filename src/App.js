import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './components/search'
import ListBooks from './components/list-books'
import './App.css'

class BooksApp extends Component {
  state = {
  }

  render() {
    return (
      <div className="app">
          <Route path="/search" render={({history}) => (
            <Search />
          )}/>
          <Route exact path="/" render={() => (
            <ListBooks />
          )}/>
      </div>
    )
  }
}

export default BooksApp
