import React from "react"
import LocationItem from "./locationItem"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"

class LocationList extends React.Component {
  render() {
    const isLoading = this.props.isLoading
    if (isLoading) {
      return (
        <div>
          <Typography variant="h4" component="h4">
            Loading....
          </Typography>
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
