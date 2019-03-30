import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"

import TextField from '@material-ui/core/TextField'
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import PlaceOutlined from "@material-ui/icons/PlaceOutlined"

import GoogleMapReact from "google-map-react"

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
  }
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapPage extends React.Component{
    static defaultProps = {
        // centered on Sellery Hall
        center: {
          lat: 43.071510,
          lng: -89.399090
        },
        zoom: 15
      };

    render() {
        return (
            <Layout page={2}>
              <Header title={"Map"} noButton />
              <div style={styles.div}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDDoL2BTrgXzUY7s1xcFVbAY5mz_Bf2C0A"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    { /* buckinghams 802 Regent St */ }
                    <PlaceOutlined
                        lat={43.067830}
                        lng={-89.399630}
                    />
                    { /* Double U 620 University Ave */ }
                    <PlaceOutlined
                        lat={43.073540}
                        lng={-89.396820}
                    />
                </GoogleMapReact>
              </div>
              <BottomNav page={2} />
            </Layout>
          )
    }
} 

export default MapPage