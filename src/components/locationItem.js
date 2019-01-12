import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import LocationModal from "../components/locationModal"

class LocationItem extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const item = this.props.item
    return (
      <Card>
        <CardContent>
          <Button onClick={this.handleOpen}>
            <Typography variant="h5" component="h2">
              {item.name}
            </Typography>
          </Button>
          <LocationModal
            handleOpen={this.handleOpen}
            handleClose={this.handleClose}
            open={this.state.open}
            id={item.id}
          />
          <ul>
            {item.deals.map(d => (<li key={d.id}>{d.description}</li>))}
          </ul>
        </CardContent>
      </Card>
    )
  }
}

export default LocationItem
