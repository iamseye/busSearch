import React, { Component } from 'react'
import SearchBox from '../components/searchBox.js'
import ListCard from '../components/listCard.js'
import Api from '../utils/api.js'
import '../styles/search.scss'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchAction: false,
      searchAttribute: {
        departCity: 'dr5reg',
        arriveCity: 'f25dvk',
        searchDate: '2020-08-02'
      },
      searchParams: {
        adult: 1
      },
      searchResult: {
        departures: []
      }
    }
  }

  clickSearch = () => {
    Api.searchBus(this.state.searchAttribute, this.state.searchParams)
      .then(res => {
        this.setState({ searchResult: res.data, searchAction: true })
      })
  }

  render() {
    return (
      <div className="search">
        <SearchBox
          clickSearch={this.clickSearch}
        />
        { this.state.searchResult.departures.map((item, i) => (
          <ListCard

          />
        ))}
      </div>
    )
  }
}

export default Search;
