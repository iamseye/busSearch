import React, { Component } from 'react'
import SearchBox from '../components/searchBox.js'
import '../styles/search.scss'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
  }

  render() {
    return (
      <div className="search">
        <SearchBox />
      </div>
    )
  }
}

export default Search;
