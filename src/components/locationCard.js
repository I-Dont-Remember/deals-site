import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import DealsContainer from "../components/dealsContainer"
import WebsiteButton from "../components/websiteButton"
import YelpButton from "../components/yelpButton"

const styles = {
    info: {
        marginBottom: `5px`
    }
}

class LocationCard extends React.Component {
    render() {
        const location = this.props.location
        return (
        <Card>
          <CardContent>
            <h3>{location.name}</h3>
            {!!location.displayAddress && (
              <p style={styles.info}>{location.displayAddress}</p>
            )}
            {!!location.phoneNumber && (
              <p style={styles.info}>{location.phoneNumber}</p>
            )}
            {!!location.website && (
            <WebsiteButton
                link={location.website}
            />
            )}
            {!!location.yelpLink && (
              <YelpButton
                link={location.yelpLink}
              />
            )}
            <DealsContainer deals={location.deals} />
          </CardContent>
        </Card>
        )
    }
}

export default LocationCard