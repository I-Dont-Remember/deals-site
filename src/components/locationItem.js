import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Modal from "@material-ui/core/Modal"
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
    return (
      <Card>
        <CardContent>
          <Button onClick={this.handleOpen}>
            <Typography variant="h5" component="h2">
              {this.props.id} Location Name
            </Typography>
          </Button>
          <LocationModal
            handleOpen={this.handleOpen}
            handleClose={this.handleClose}
            open={this.state.open}
            id={this.props.id}
          />
          <Typography component="p">
            <ul>
              <li>hi</li>
              <li>anotha one</li>
              <li>a third one</li>
            </ul>
          </Typography>
          <Button color="secondary">Hello</Button>
        </CardContent>
      </Card>
    )
  }
}

export default LocationItem
