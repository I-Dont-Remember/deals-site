import React from "react"
import LocationItem from "./locationItem"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"

class LocationList extends React.Component {
  render() {
    const  isLoading = this.props.isLoading
    if (isLoading) {
      return (
        <div>
          <Typography variant="h3" component="h3">
            Loading beep boop beep........
          </Typography>
        </div>
      )
    }
    return (
      <List>
        {this.props.items.map(i => (
          <LocationItem key={i.id} id={i.id} name={i.name}/>
        ))}
      </List>
    )
  }
}

export default LocationList
