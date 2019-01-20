import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import LocationModal from "../components/locationModal"
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = {
    card: {
        margin: `8px 0px`
    }
}

class LocationItem extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    console.log("closing")
    this.setState({ open: false })
  }

  // use the slice of deals just to show a limited number so we don't overwhelm the page
  render() {
    console.log(this.state);
    return (
      <Card style={styles.card}>
        <CardActionArea onClick={this.handleOpen}>
            <CardContent>
            <Typography variant="h5" component="h2">
            {this.props.item.name}
            </Typography>
            <LocationModal
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                open={this.state.open}
                location={this.props.item}
            />
            <ul>
                {this.props.item.deals.slice(0, 3).map(d => (
                <li key={d.id}>{d.description}</li>
                ))}
            </ul>
            </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default LocationItem
