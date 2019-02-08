import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"
import Select, { components } from "react-select"
import { navigate, graphql } from "gatsby"
import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"

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
  selectComponent: {
    color: "black",
    position: "relative",
    width: "90%",
    maxWidth: "400px",
    marginTop: "40px"
  },
  control: {
    position: "relative",
    width: "100%",
  },
  image: {
      opacity: "0.5",
      marginTop: "45%"
  },
  grid: {
        height: "100%"
  }
}

function shimLocationOptions(locations) {
    let options = []
    for (let i in locations) {
      let o = { value: locations[i].fields.slug, label: locations[i].name }
      options.push(o)
    }
    return options
  }

const selectComponent = props => (
<div style={styles.selectComponent}>
    <components.Control {...props} />
</div>
)

const controlComponent = props => (
<div style={styles.control}>
    <components.Control {...props} />
</div>
)

class LocationsPage extends React.Component {

    state = {
        location: null
    }

    handleLocationSelectChange = selectedOption => {
        this.setState({ location: selectedOption });
        console.log("--> " + selectedOption);
        navigate(selectedOption.value)
      }

    render() {
        const data = this.props.data;

        const locations = shimLocationOptions(data.allDataYaml.edges.map(e => e.node));
        console.log("l -" + JSON.stringify(locations));
        return (
        <Layout page={1}>
            <Header title={"Bars"} noButton />
            <div style={styles.div}>
            <Grid
                style={styles.grid}
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Select
                    components={{
                        Control: controlComponent,
                        SelectContainer: selectComponent,
                    }}
                    options={locations}
                    value={this.state.location}
                    onChange={this.handleLocationSelectChange}
                    placeholder="type a name..."
                    isClearable
                />
                <Img
                    style={styles.image}
                    fixed={data.file.childImageSharp.fixed}
                />
            </Grid>
            </div>
            <BottomNav page={1} />
        </Layout>
    )
    }
}

export const query = graphql`
    query {
    allDataYaml {
        edges {
        node {
            fields {
            slug
            }
            name
        }
        }
    }
    file(relativePath: { eq: "beer-tap.png" }) {
        childImageSharp {
            fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
            }
        }
    }
}
`

export default LocationsPage