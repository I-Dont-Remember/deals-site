import React from "react"
import LocationItem from "./locationItem"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
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
  render() {
    const isLoading = this.props.isLoading;
    if (isLoading) {
      return (
        <div style={styles.progressDiv}>
            <CircularProgress style={styles.circle} color="primary" />
        </div>
      )
    }
    return (
      <List>
        {this.props.items.map(i => (
          <LocationItem key={i.id} item={i} />
        ))}
      </List>
    )
  }
}

export default LocationList
