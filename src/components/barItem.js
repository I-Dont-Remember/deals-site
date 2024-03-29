import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardHeader from "@material-ui/core/CardHeader"
import { navigate } from "gatsby"
import Deals from "../components/deals"

const styles = {
  card: {
    width: "100%",
    maxWidth: "300px",
    margin: `8px 0px`,
  },
  content: {
      padding: "5px"
  }
}

class BarItem extends React.Component {
  toBarPage = () => {
    const bar = this.props.bar;
    navigate(bar.fields.slug, 
    {
        state: { fromPage: "2"},
    })
  }

  render() {
    const bar = this.props.bar;
    return (
      <Card style={styles.card}>
        <CardActionArea onClick={this.toBarPage}>
        {/* <CardHeader
            title={bar.name}
        /> */}
        <CardContent>
            <h3>{bar.name}</h3>
            <p style={{marginBottom: "5px"}}>Distance: {bar.distance} mi</p>
        </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default BarItem
