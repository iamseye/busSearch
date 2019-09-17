import React, { Component } from 'react'
import SearchBox from '../components/searchBox.js'
import Api from '../utils/api.js'
import '../styles/search.scss'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      departCity: 'dr5reg',
      arriveCity: 'f25dvk',
      searchDate: '2020-08-02',
      searchResult: []
    }
  }

  clickSearch() {
    const searchResult = Api.searchBus({
      departCity: this.state.departCity,
      arriveCity: this.state.arriveCity,
      searchDate: this.state.searchDate
    });

    this.setState({ searchResult: searchResult })
  }

  render() {
    return (
      <div className="search">
        <SearchBox
          clickSearch={this.clickSearch}
        />
      </div>
    )
  }
}

export default Search;
