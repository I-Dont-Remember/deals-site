import React from "react"
import LocationItem from "./locationItem"
import List from "@material-ui/core/List"
import CircularProgress from "@material-ui/core/CircularProgress"

const styles = {
  progressDiv: {
    paddingTop: "35%",
    height: "100px",
    textAlign: "center",
  },
  circle: {},
}

class LocationList extends React.Component {
  // if it matches any types, let it through
  isNotFiltered(deal) {
    const drinks = this.props.drinks
    const events = this.props.events
    const food = this.props.food
    const types = deal.types
    const day = this.props.day
    if (deal.types === undefined || deal.types === null) {
      return false
    }

    let validType = false
    if (drinks && types.includes("Drinks")) {
      validType = true
    }

    if (food && types.includes("Food")) {
      validType = true
    }

    if (events && types.includes("Events")) {
      validType = true
    }

    // type isn't filtered and it's on the day users want to see
    return validType && (deal.days.includes(day) || day === "Any")
  }

  // use the slice of deals just to show a limited number so we don't overwhelm the page
  getValidDeals(node) {
    const term = this.props.searchTerm
    const deals = node.deals

    const matches = deals.filter(deal => {
      const notFiltered = this.isNotFiltered(deal)
      return deal.description.indexOf(term) !== -1 && notFiltered
    })
    return matches
  }

  render() {
    const isLoading = this.props.isLoading
    const edges = this.props.edges

    if (isLoading) {
      return (
        <div style={styles.progressDiv}>
          <CircularProgress style={styles.circle} color="primary" />
        </div>
      )
    }
    return (
      <List>
        {edges.map(e => {
          const validDeals = this.getValidDeals(e.node)
          return (
            validDeals.length > 0 && (
              <LocationItem
                key={e.node.name}
                location={e.node}
                validDeals={validDeals}
              />
            )
          )
        })}
      </List>
    )
  }
}

export default LocationList
