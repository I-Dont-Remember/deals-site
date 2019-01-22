import React from "react"

import SearchHeader from "../components/searchHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LocationList from "../components/locationList"
const Client = require("../api");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class IndexPage extends React.Component {
  state = {
    searchValue: "",
    isLoading: true,
    items: [],
    filteredItems: []
  }

  searchOnChange = event => {
    this.setState({ searchValue: event.target.value })
  }

  handleSearch = () => {
    this.setState({ isLoading: true });
    const items = this.state.items;
    // fake that we called the API, hue hue hue hue hue
    const wait = getRandomInt(500) + 100;
    setTimeout(() => this.setState({ isLoading: false }), wait);
    this.setState({ filteredItems: this.filterItems(items) });

    // send the search term to be stored for analytics
    const client = new Client();
    client.sendData(this.state.searchValue.toLowerCase())
        .then(response => {
            console.log(response);
        })
      .catch(function (err) {
        console.log("failed sending search data " + err);
      });
  }

  componentDidMount() {
    const client = new Client();

    client.getLocationsWithDeals("uw-madison")
      .then(response => {
        return response.json();
    })
    .then(items => {
        console.log(items);
        this.setState({ items: items, filteredItems: items, isLoading: false});
    })
    .catch(function (err) {
        console.log("Issue: " + err);
    })
  }


  getValidDeals(deals, value) {
    let list = [];
    console.log("Value " + value);
    for (let i in deals) {
        if (deals[i].description.toLowerCase().indexOf(value) !== -1) {
            list.push(deals[i]);
        }
    }
    return list;
  }

  filterItems(items) {
    const value = this.state.searchValue.toLowerCase();
    
    return items.filter(i => {
        const validDeals = this.getValidDeals(i.deals, value);
        console.log(`${i.name} valid deals len: ${validDeals.length}`);
        if (validDeals.length > 0) {
            i.deals = validDeals;
            return true;
        } else {
            return false;
        }
    });
  }

  render() {
    return (
      <Layout>
        <SearchHeader handleSearch={this.handleSearch} searchOnChange={this.searchOnChange}/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <LocationList
            items={this.state.filteredItems}
            isLoading={this.state.isLoading}
          />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
