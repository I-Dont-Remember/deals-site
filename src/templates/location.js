import React from "react"
import { graphql } from "gatsby"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

import Header from "../components/header"
import Layout from "../components/layout"
import DealsContainer from "../components/dealsContainer"

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
  return (
    <Layout>
      <Header title={location.name} />
      <div style={styles.div}>
        <Card>
          <CardContent>
            <h3>{location.name}</h3>
            {notNullOrUndefined(location.displayAddress) && (
              <p style={styles.info}>{location.displayAddress}</p>
            )}
            {notNullOrUndefined(location.phoneNumber) && (
              <p style={styles.info}>Phone: {location.phoneNumber}</p>
            )}
            {notNullOrUndefined(location.website) && (
              <p style={styles.info}>Site: {location.website}</p>
            )}
            {notNullOrUndefined(location.yelpLink) && (
              <p style={styles.info}>Yelp: {location.yelpLink}</p>
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
