import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LocationList from "../components/locationList"
const Client = require("../api");

class IndexPage extends React.Component {
  state = {
    searchValue: "",
    isLoading: true,
    items: []
  }

  searchOnChange = event => {
    this.setState({ searchValue: event.target.value })
  }

  componentDidMount() {
    const client = new Client();
      
    //const apiUrl = "http://lvh.me:4500/campuses/random-slug/locations?expand=deals"
    // call api here for initial deals, this is just to simulate loading data
    //fetch(apiUrl)
    client.getLocationsWithDeals("uw-madison")
      .then(response => {
        return response.json();
    })
    .then(items => {
        console.log(items);
        this.setState({ items: items, isLoading: false});
    })
    .catch(function (err) {
        console.log("Issue: " + err);
    })
  }

  filterItems() {
    const value = this.state.searchValue.toLowerCase();
    return this.state.items.filter(i => {
      for (let d of i.deals) {
        if (d.description.toLowerCase().indexOf(value) !== -1) {
          return true
        }
      }
      return false
    })
  }

  render() {
    return (
      <Layout>
        <Header searchOnChange={this.searchOnChange} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div>{this.state.searchValue}</div>
          <LocationList
            items={this.filterItems()}
            isLoading={this.state.isLoading}
          />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
