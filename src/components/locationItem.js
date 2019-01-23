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
    const item = this.props.item;
    navigate(item.fields.slug);
  }

    getValidDeals(deals, term) {
        const matches = deals.filter(deal => {
            return deal.description.indexOf(term) !== -1;
        });
        return matches;
    }

  // use the slice of deals just to show a limited number so we don't overwhelm the page
  render() {
      const item = this.props.item;
      const term = this.props.searchTerm;

    return (
      <Card style={styles.card}>
        <CardActionArea onClick={this.toLocationPage}>
            <CardContent>
            <Typography variant="h5" component="h2">
            {item.name}
            </Typography>
            <ul>
                {this.getValidDeals(item.deals, term).slice(0, 3).map(d => (
                <li key={d.description}>{d.description}</li>
                ))}
            </ul>
            </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default LocationItem
