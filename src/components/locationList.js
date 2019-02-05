import React from "react"
import LocationItem from "./locationItem"
import List from "@material-ui/core/List"
import CircularProgress from "@material-ui/core/CircularProgress"
import Grid from '@material-ui/core/Grid'

const styles = {
  progressDiv: {
    paddingTop: "35%",
    height: "100px",
    textAlign: "center",
  },
  circle: {},
  empty: {
      marginTop: "50%",
      color: "#778899"
  }
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

    let validLocations = [];
    for (let i in edges) {
        const e = edges[i];
        const validDeals = this.getValidDeals(e.node);

        if (validDeals.length > 0) {
            validLocations.push({
                edge: e,
                validDeals: validDeals
            })
        }
    }

    console.log("len: " + validLocations.length);
    if (validLocations.length > 0) {
        return (
            <List>
                {
                    validLocations.map(l => {
                        return (<LocationItem
                            key={l.edge.node.name}
                            location={l.edge.node}
                            validDeals={l.validDeals}
                        />)
                    })
                }
            </List>
        )
    } else {
        return (
            <Grid container justify="center" style={styles.empty}>
                <div style={{ maxWidth: "50%"}}>
                    Nothing found on {this.props.day}.
                </div>
            </Grid>
        )
    }
  }
}

export default LocationList
