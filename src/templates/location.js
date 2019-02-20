import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import LocationCard from "../components/locationCard"

const styles = {
  div: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 10,
  }
}

export default ({ data, location }) => {
    console.log(location)
  const bar = data.dataYaml
  return (
    <Layout>
      <Header fromRandom={location.state?location.state.fromRandom:false} />
      <div style={styles.div}>
        <LocationCard
            location={bar}
        />
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
        time
        days
        type
      }
    }
  }
`
