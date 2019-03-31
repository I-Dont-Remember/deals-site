import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"

import TextField from '@material-ui/core/TextField'
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import PlaceOutlined from "@material-ui/icons/PlaceOutlined"

import {Map, Marker, InfoWindow, Circle, GoogleApiWrapper } from 'google-maps-react'
import { StaticQuery } from "gatsby"

const styles = {
  div: {
    height: '100vh',
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 10,
  },
  info: {
    marginBottom: `5px`,
  },
  form: {
      width: "90%",
      maxWidth: "400px",
  },
  multiline: {
      width: "100%"
  },
  button: {
      marginTop: "5%",
      marginBottom: "15%",
  },
  map: {
      maxHeight: "80%"
  }
}

class MapPage extends React.Component{
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        // centered on Sellery Hall
        center: {
            lat: 43.071510,
            lng: -89.399090
        }
    };

    static defaultProps = {
        // centered on Sellery Hall
        center: {
          lat: 43.071510,
          lng: -89.399090
        },
        zoom: 15
      };

    updatePosition = (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        console.log("lat " + lat + " long " + lng);
        this.setState({
            center: {
                lat: lat,
                lng: lng
            }
        })
    }

    componentDidMount = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.updatePosition, 
                (error) => {
                    console.log(error);
            });
        } else {
            console.log("no geolocation");
        }
      }

      onMarkerClick = (props, marker, e) => {
        console.log(props);
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
      }
  
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
    render() {
        return (
            <StaticQuery
                query={graphql`
                query {
                    allDataYaml {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            name
                            displayAddress
                            position {
                                lat
                                lng
                            }
                        }
                    }
                    }
                }
                `}
            >
                {data => {
                let bars = data.allDataYaml.edges.map(e=> e.node);
                // only use bars that have lat/lng
                bars = bars.filter(b => {
                    return b.position
                })

                console.log("bars with position = " + bars.length);

                return (
            <Layout page={2}>
            <Header noButton />
                <Map
                    google={this.props.google}
                    initialCenter={this.props.center}
                    zoom={this.props.zoom}
                    onClick={this.onMapClicked}
                    style={styles.map}
                    center={this.state.center}
                >
                    <Circle
                        radius={40}
                        center={this.state.center}
                        onMouseover={() => console.log('mouseover')}
                        onClick={() => console.log('click')}
                        onMouseout={() => console.log('mouseout')}
                        strokeColor='transparent'
                        strokeOpacity={0}
                        strokeWeight={5}
                        fillColor='#0099ff'
                        fillOpacity={0.4}
                    />
                    {bars.map(b => (
                        <Marker
                        key={b.name}
                        name={b.name}
                        displayAddress={b.displayAddress}
                        position={b.position}
                        onClick={this.onMarkerClick}
                        />
                    ))}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h3>{this.state.selectedPlace.name}</h3>
                            <p>{this.state.selectedPlace.displayAddress}</p>
                        </div>
                    </InfoWindow>
                </Map>
            <BottomNav page={2} />
            </Layout>
                )}}
            </StaticQuery>
        )
    }
} 

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDDoL2BTrgXzUY7s1xcFVbAY5mz_Bf2C0A")
})(MapPage)