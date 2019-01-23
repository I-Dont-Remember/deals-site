import React from "react"
import LocationItem from "./locationItem"
import List from "@material-ui/core/List"
import CircularProgress from "@material-ui/core/CircularProgress"

const styles = {
    progressDiv: {
        paddingTop: "35%",
        height: "100px",
        textAlign: "center"
    },
    circle: {
    }
};

class LocationList extends React.Component {

    hasValidDeals(node, term) {
        const deals = node.deals;
        const matches = deals.filter(deal => {
            return deal.description.indexOf(term) !== -1;
        });
        return matches.length > 0;
    }

  render() {
    const isLoading = this.props.isLoading;
    const term = this.props.searchTerm;
    const edges = this.props.edges;

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
            return (this.hasValidDeals(e.node, term) &&
          <LocationItem key={e.node.name} item={e.node} searchTerm={term} />
        )
            })}
      </List>
    )
  }
}

export default LocationList
