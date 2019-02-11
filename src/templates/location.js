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

export default ({ data }) => {
  const location = data.dataYaml
  console.log(JSON.stringify(location))
  return (
    <Layout>
      <Header />
      <div style={styles.div}>
        <LocationCard
            location={location}
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
        days
      }
    }
  }
`
