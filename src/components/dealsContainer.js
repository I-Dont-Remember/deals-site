import React from "react"
import PropTypes from 'prop-types'
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import SwipeableViews from "react-swipeable-views"
import Deals from "../components/deals"
const utils = require("../utils");

const splitDealsByDay = (deals) => {
    let days = {};
    if (!deals) {
        return days;
    }
    deals.forEach(deal => {
        deal.days.forEach(d => {
            const day = d.toLowerCase();
            if (!!days[day]) {
                days[day].push(deal)
            } else {
                // add a fresh day
                days[day] = [deal]
            }
        })
    });

    return days;
}

const styles = {
    div: {
        marginTop: "10%"
    },
    content: {
        marginTop: "5%"
    },
    empty: {
        color: "#778899"
    },
    card: {
        marginTop: "2%"
    }
}

class DayTab extends React.Component {
    render() {      
        return (
        <Card style={styles.card}>
            <CardContent style={styles.content}>
            {
                (!! this.props.deals) 
                ? (<Deals deals={this.props.deals} />)
                : (<div style={styles.empty}>Nothing for now...</div>)
            }
            </CardContent>
        </Card>

        )
    }
}

class DealsContainer extends React.Component {
    state = {
        value: utils.getDayNum()
    }

  handleChange = (event, value) => {
    console.log("value change: " + value);
    this.setState({ value: value});
  }

  handleChangeIndex = index => {
      console.log("index change : " + index);
      this.setState({ value: index });
  }

  render() {
    // TODO: disable tab if no deals available for that day
    const deals = this.props.deals
    const { value } = this.state;

    const sortedDeals = splitDealsByDay(this.props.deals);

    return (
        <div style={styles.div}>
        <AppBar color="secondary" position="static">
            <Tabs 
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"    
                variant="scrollable"
                scrollButtons="auto"
            >
                <Tab label="Su" />
                <Tab label="M" />
                <Tab label="Tu" />
                <Tab label="W" />
                <Tab label="Th" />
                <Tab label="F" />
                <Tab label="Sa" />
            </Tabs>
        </AppBar>
        <SwipeableViews
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
        >
            <DayTab deals={sortedDeals["sun"]} />
            <DayTab deals={sortedDeals["mon"]} />
            <DayTab deals={sortedDeals["tue"]} />
            <DayTab deals={sortedDeals["wed"]} />
            <DayTab deals={sortedDeals["thu"]} />
            <DayTab deals={sortedDeals["fri"]} />
            <DayTab deals={sortedDeals["sat"]} />
        </SwipeableViews>
        </div>
    )
  }
}

export default DealsContainer
