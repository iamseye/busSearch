import React, { Component } from 'react'
import SearchBox from '../components/searchBox.js'
import ListCard from '../components/listCard.js'
import Api from '../utils/api.js'
import Utils from '../utils/utils.js'
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
        locations: [],
        departures: [],
        operators: []
      }
    }
  }

  clickSearch = () => {
    Api.searchBus(this.state.searchAttribute, this.state.searchParams)
      .then(res => {
        this.setState({ searchResult: res.data, searchAction: true })
      })
  }

  getLocationData = (locatoinId) => {
    return this.state.searchResult.locations.find(item =>
      item.id === locatoinId
    )
  }

  getOperatorData = (operatorId) => {
    return this.state.searchResult.operators.find(item =>
      item.id === operatorId
    )
  }

  render() {
    return (
      <div className="search">
        <SearchBox
          clickSearch={this.clickSearch}
        />
        { this.state.searchResult.departures.map((item, i) => (
          <ListCard key={i}
            price={Utils.priceFormatter('USD', item.prices.total)}
            departureTime={Utils.getLocalTime(item.departure_time, item.departure_timezone)}
            arrivalTime={Utils.getLocalTime(item.arrival_time, item.arrival_timezone)}
            departureStation={this.getLocationData(item.origin_location_id)}
            arrivalStation={this.getLocationData(item.destination_location_id)}
            operator={this.getOperatorData(item.operator_id)}
          />
        ))}
      </div>
    )
  }
}

export default Search;
