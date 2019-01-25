import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActionArea from "@material-ui/core/CardActionArea"
import {  navigate } from "gatsby"

const styles = {
    card: {
        margin: `8px 0px`
    }
};

class LocationItem extends React.Component {
  toLocationPage = () => {
    const location = this.props.location;
    navigate(location.fields.slug);
  }

  render() {
      const location = this.props.location;
      const deals = this.props.validDeals;

    return (
      <Card style={styles.card}>
        <CardActionArea onClick={this.toLocationPage}>
            <CardContent>
            <Typography variant="h5" component="h2">
            {location.name}
            </Typography>
            <ul>
                {deals.map(d => (
                <li key={d.description}>{d.description + " | " + d.types + " | " + d.days}</li>
                ))}
            </ul>
            </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default LocationItem
