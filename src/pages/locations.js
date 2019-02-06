import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"

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


export default ({ data }) => {

  return (
    <Layout page={1}>
        <Header noButton />
        <div style={styles.div}>
            <h1>locations page</h1>
        </div>
        <BottomNav page={1} />
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     dataYaml(fields: { slug: { eq: $slug } }) {
//       name
//       displayAddress
//       phoneNumber
//       website
//       yelpLink
//       deals {
//         description
//         days
//       }
//     }
//   }
// `
