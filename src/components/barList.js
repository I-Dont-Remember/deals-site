import React from "react"
import LocationItem from "./locationItem"
import List from "@material-ui/core/List"
import CircularProgress from "@material-ui/core/CircularProgress"
import Grid from '@material-ui/core/Grid'
import BarItem from "./barItem";

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

class BarList extends React.Component {
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


    render() {
        const bars = this.props.bars;
        return (
            <List>
                {
                    bars.map(b => {
                        return (<BarItem
                            key={b.name}
                            bar={b}
                        />)
                    })
                }
            </List>
        )
    }
}

export default BarList
