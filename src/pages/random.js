import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"

const styles = {
  div: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 10,
  },
  header: {
      marginTop: "25%",
      textAlign: "center"
  },
  button: {
    marginTop: "5%",
    fontSize: "24px",
    padding: "6px 32px",
    marginBottom: "8%"
  },
  gridItem: {
      padding: "4px"
  }
}

class RandomPage extends React.Component {

    state = {
        waiting: false,
        bar: null,
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleClick = () => {
        const bars = this.state.bars;
        const rand = bars[Math.floor(Math.random()*bars.length)];
        if (!this.state.waiting) {
            this.setState(
                { 
                    waiting: true,
                },
                () => {
                    this.timer = setTimeout(() => {
                        this.setState({
                            waiting: false,
                            bar: {
                                name: rand.name,
                                slug: rand.slug
                            }
                        });
                    }, 1200);
                }
            );
        }
    }

    componentDidMount() {
        const namesAndSlugs = this.props.data.allDataYaml.edges.map(e=> {return {name: e.node.name, slug: e.node.fields.slug}})
        this.setState({ bars: namesAndSlugs });
    }

    render() {
        const bar = this.state.bar;
        return (
            <Layout page={3}>
              <Header title={"Randomizer"} noButton />
              <div style={styles.div}>
              <Grid
                container
                spacing={40}
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid
                    style={styles.header}
                    item
                >
                    <h1>Don't know where to go?</h1>
                </Grid>
                <Grid
                    style={styles.results}
                    item
                >
                    {
                    this.state.waiting
                    ?<CircularProgress size={80} style={StyleSheet.progress} />
                    /* has to be string "3" not int because of weird crap breaking when passing it*/
                    :<h3>{bar?<Link to={bar.slug} state={{ fromPage: "3" }}>{bar.name} !</Link>:"_____"}</h3>
                    }
                </Grid>
                <Grid
                    item
                    style={styles.gridItem}
                >
                    <Button label="random" style={styles.button} onClick={this.handleClick} variant="contained" color="primary">
                        Randomize!
                    </Button>
                </Grid>
              </Grid>
              </div>
              <BottomNav page={3} />
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
}
`
export default RandomPage