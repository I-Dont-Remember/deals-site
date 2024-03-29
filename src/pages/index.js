import React from "react"

import BottomNav from "../components/bottomNav"
import SearchHeader from "../components/searchHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LocationList from "../components/locationList"
import { graphql, StaticQuery, navigate } from "gatsby"
const utils = require("../utils");
const Client = require("../api")

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const dayOptions = [
  { value: "Mon", label: "Monday" },
  { value: "Tue", label: "Tuesday" },
  { value: "Wed", label: "Wednesday" },
  { value: "Thu", label: "Thursday" },
  { value: "Fri", label: "Friday" },
  { value: "Sat", label: "Saturday" },
  { value: "Sun", label: "Sunday" },
  { value: "Any", label: "Any Day" },
]

class IndexPage extends React.Component {
  state = {
    inputValue: "",
    searchTerm: "",
    isLoading: false,
    drinks: true,
    food: true,
    events: true,
    day: utils.getCurrentDay().value,
    dayOption: utils.getCurrentDay(),
  }

  searchOnChange = event => {
    // if value is empty (user backspaced to nothing), show everything again
    const value = event.target.value.toLowerCase()
    let update = { inputValue: value }
    if (value === "") {
      update.searchTerm = ""
    }
    this.setState(update)
  }

  handleSearch = () => {
    const value = this.state.inputValue
    if (value === "") {
      return
    }

    this.setState({ isLoading: true, searchTerm: value, inputValue: "" })
    // fake that we called the API, hue hue hue hue hue
    const wait = getRandomInt(500) + 100
    setTimeout(() => this.setState({ isLoading: false }), wait)

    // send the search term to be stored for analytics
    const client = new Client()
    client
      .sendData(value)
      .then(response => {
        console.log(response)
      })
      .catch(function(err) {
        console.log("failed sending search data " + err)
      })
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      console.log("enter was pressed")
      this.handleSearch()
    }
  }

  handleDrinksChange = event => {
    this.setState({ drinks: event.target.checked })
  }

  handleFoodChange = event => {
    this.setState({ food: event.target.checked })
  }

  handleEventsChange = event => {
    this.setState({ events: event.target.checked })
  }

  handleDaysChange = selectedOption => {
    this.setState({ day: selectedOption.value, dayOption: selectedOption })
  }

  handleLocationSelectChange = selectedOption => {
    this.setState({ locationOption: selectedOption });
    console.log("--> " + selectedOption);
    navigate(selectedOption.value)
  }

  onLocationKeyDown = event => {
    const key = event.key
    if (key === "Enter") {
      console.log("Pressed enter")
      console.log(event.target.value)
    }
  }

  handleLocationButton = () => {
    const option = this.state.locationOption
    if (option !== undefined && option.value !== undefined) {
      navigate(option.value)
    } else {
      alert("That location doesn't exist!")
    }
  }

  handleClear = () => {
    document.getElementById("search-input").value = "";
    this.setState({ searchTerm: ""})
  }   

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allDataYaml {
              edges {
                node {
                  fields {
                    slug
                  }
                  name
                  deals {
                    description
                    time
                    days
                    types
                  }
                }
              }
            }
          }
        `}
      >
        {data => (
          <Layout page={0}>
            <SearchHeader
              handleSearch={this.handleSearch}
              searchOnChange={this.searchOnChange}
              handleKeyPress={this.handleKeyPress}
              handleFood={this.handleFoodChange}
              handleDrinks={this.handleDrinksChange}
              handleEvents={this.handleEventsChange}
              handleDaysChange={this.handleDaysChange}
              day={this.state.day}
              dayOption={this.state.dayOption}
              food={this.state.food}
              drinks={this.state.drinks}
              events={this.state.events}
              dayOptions={dayOptions}
              locations={data.allDataYaml.edges.map(e => e.node)}
              handleLocationSelectChange={this.handleLocationSelectChange}
              search={this.state.search}
              onKeyDown={this.onLocationKeyDown}
              handleLocation={this.handleLocationButton}
              handleClear={this.handleClear}
              currentValue={this.state.inputValue}
            />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <SEO title="Home" keywords={[`deals`, `Madison`, `Bars`]} />
              <LocationList
                edges={data.allDataYaml.edges}
                isLoading={this.state.isLoading}
                searchTerm={this.state.searchTerm}
                day={this.state.day}
                drinks={this.state.drinks}
                food={this.state.food}
                events={this.state.events}
              />
            </div>
            <BottomNav page={0} />
          </Layout>
        )}
      </StaticQuery>
    )
  }
}

export default IndexPage
