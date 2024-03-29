import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"
import Select, { components } from "react-select"
import { navigate, graphql } from "gatsby"
import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"
import LocationCard from "../components/locationCard"
import BarList from "../components/barList"
import BarItem from "../components/barItem"
import Paper from "@material-ui/core/Paper"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "@material-ui/core/IconButton"
import Close from "@material-ui/icons/Close"
import Switch from '@material-ui/core/Switch'

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
  },
  noMatchesDiv: {
    marginTop: "35%",
    textAlign: "center"
  },
  grid: {
        height: "100%",
        width: "100%",
        maxWidth: "400px"
  },
  cardDiv: {
      marginTop: "10%",
      width: "95%",
      maxWidth: "400px"
  },
  paper: {
    display: "flex",
    width: "90%",
    alignItems: "center",
    padding: "2px 4px",
    maxWidth: "400px",
    marginTop: "2%",
  },
  input: {
    width: "95%",
    maxWidth: "300px",
  },
  toggle: {
    marginTop: "15px"
  }
}

function shimLocationOptions(locations) {
    let options = []
    for (let i in locations) {
      let o = { value: locations[i], label: locations[i].name }
      options.push(o);
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


function shimBars(edges) {
    return edges.map(e => {
        return e.node;
    })
}

function getValidBars(text, bars) {
    // filter the bars
    console.log("Text " + text);
    return bars.filter(b => {
        return b.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
    });
}

function rad(x) {
    return x*Math.PI/ 180;
}

function calulateDistance(barPosition, userPosition) {
    const R = 6378137;
    const dLat = rad(barPosition.lat - userPosition.lat);
    const dLong = rad(barPosition.lng - userPosition.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(barPosition.lat)) * Math.cos(rad(userPosition.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var meters = R * c;
    
    return (meters/ 1609.344).toPrecision(2);
}

class LocationsPage extends React.Component {
    state = {
        value: "",
        distance: true,
        center: undefined,
        noLocation: true
    }

    inputOnChange = (event) => {
        console.log(event.target.value);
        this.setState({value: event.target.value })
    }

    handleClear = () => {
        this.setState({
            value: ""
        })
    }

    updatePosition = (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        console.log("lat " + lat + " long " + lng);
        this.setState({
            center: {
                lat: lat,
                lng: lng
            },
            noLocation: false
        })
    }

    componentDidMount = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.updatePosition, 
                (error) => {
                    console.log(error);
            });
        } else {
            this.setState({
                noLocation: true
            });
            console.log("no geolocation");
        }
      }

    handleSwitchChange = (event, value) => {
        this.setState({
            distance: value
        })
    }

    render() {
        const bars = shimBars(this.props.data.allDataYaml.edges);
        let validBars = getValidBars(this.state.value, bars);
        validBars.forEach(b => {
            if (this.state.center) {
                b.distance = calulateDistance(b.position, this.state.center);
            } else {
                b.distance = "unknown"
            }
        })

        // make sure they want distance and also we have distance ints
        if (this.state.distance && validBars[0].distance != "unknown") {
            validBars.sort(function(a,b) {
                return a.distance - b.distance;
            })
        }

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
                <Paper style={styles.paper}>
                    <Input
                        style={styles.input}
                        placeholder={"Find a bar..."}
                        onChange={this.inputOnChange}
                        value={this.state.value}
                        endAdornment={
                            (this.state.value !== "")
                            ?<InputAdornment>
                                <IconButton
                                    onClick={this.handleClear}
                                >
                                    <Close />
                                </IconButton>
                            </InputAdornment>
                            :<div></div>
                        }
                    />
                </Paper>
                <Grid style={styles.toggle} item xs={12}>
                    <Grid container justify="center">
                        <Grid item>
                            <h5>A-Z</h5>
                        </Grid>
                        <Grid item>
                            <Switch disabled={this.state.noLocation}
                                checked={this.state.distance}
                                onChange={this.handleSwitchChange}
                                color="primary"
                            />
                        </Grid>
                        <Grid item>
                            <h5>Distance</h5>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    {(validBars && validBars.length !== 0)              
                        ? <BarList
                            bars={validBars}
                        />
                        :(
                        <div style={styles.noMatchesDiv}>
                            <Img
                            style={styles.image}
                            fixed={this.props.data.file.childImageSharp.fixed}
                            />
                            <h5>No matches found</h5>
                        </div>
                        )
                    }
                </Grid>
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
            displayAddress
            phoneNumber
            website
            yelpLink
            position {
                lat
                lng
            }
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