import React from "react"
import LocationItem from "./locationItem"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"

class LocationList extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    // call api here for initial deals
    setTimeout(() => this.setState({ isLoading: false }), 1000)
  }

  render() {
    const { isLoading } = this.state
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
          <LocationItem id={i.id} />
        ))}
      </List>
    )
  }
}

export default LocationList
