import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"

import TextField from '@material-ui/core/TextField'
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"

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


export default ({ data }) => {

  return (
    <Layout page={4}>
      <Header noButton />
      <div style={styles.div}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <h1>Deals On Tap</h1>
        <p>Deals On Tap is here to make finding deals at your favorite bars
            as easy as possible.  We're adding more features all the time, so
            come back soon!
        </p>
        <br />
        <h4>Are we missing deals? Thought of a cool feature we need? Contact us with the form below.</h4>
        <form 
            style={styles.form}
            action="https://formspree.io/kpquinn2@wisc.edu"
            method="POST"
        >
        <Paper>
        <TextField
            name="feedback"
            type="text"
            style={styles.multiline}
            label="Feedback"
            multiline
            variant="outlined"
        />    
        </Paper>
        <Button type="submit" label="Submit" style={styles.button} variant="contained" color="primary">
            Submit
        </Button>
        </form>
      </Grid>
      </div>
      <BottomNav page={4} />
    </Layout>
  )
}
