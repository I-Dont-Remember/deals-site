import React from "react"
import { graphql } from "gatsby"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

import Header from "../components/header"
import Layout from "../components/layout"
import DealsContainer from "../components/dealsContainer"
import WebsiteButton from "../components/websiteButton"
import YelpButton from "../components/yelpButton"

const styles = {
  div: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 10,
  },
  info: {
    marginBottom: `5px`,
  },
}

function notNullOrUndefined(obj) {
  if (obj === undefined) {
    return false
  }

  if (obj === null) {
    return false
  }
  return true
}

export default ({ data }) => {
  const location = data.dataYaml
  console.log(JSON.stringify(location))
  return (
    <Layout>
      <Header />
      <div style={styles.div}>
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
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    dataYaml(fields: { slug: { eq: $slug } }) {
      name
      displayAddress
      phoneNumber
      website
      yelpLink
      deals {
        description
        days
      }
    }
  }
`
