import React from "react"

import SearchHeader from "../components/searchHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LocationList from "../components/locationList"
import { graphql, StaticQuery } from "gatsby";
const Client = require("../api");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getCurrentDay() {
    const d = new Date();
    const dayNum = d.getDay();
    const hour = d.getHours();

    // if it's before 2am, show the day before because
    // people are still at bars
    if (hour < 2) {
        if (dayNum == 0) {
            dayNum = 6;
        } else {
            dayNum = dayNum - 1;
        }
    }

    let dayStr;
    switch (dayNum) {
        case 0:
            dayStr = "Sun";
            break;
        case 1:
            dayStr = "Mon";
            break;
        case 2:
            dayStr = "Tue";
            break;
        case 3:
            dayStr = "Wed";
            break;
        case 4:
            dayStr = "Thu";
            break;
        case 5:
            dayStr = "Fri";
            break;
        case 6:
            dayStr = "Sat";
            break;
        default:
            console.log("Unknown day number " + dayNum);
            dayStr = "Mon";
    }
    return dayStr;
}

class IndexPage extends React.Component {
    state = {
        inputValue: "",
        searchTerm: "",
        isLoading: false,
        drinks: true,
        food: true,
        events: true,
        day: getCurrentDay()
    };

    searchOnChange = event => {
        // if value is empty (user backspaced to nothing), show everything again
        const value = event.target.value.toLowerCase();
        let update = { inputValue: value };
        if (value === "") {
            update.searchTerm = "";
        }
        this.setState(update)
    }

    handleSearch = () => {
        const value = this.state.inputValue;
        this.setState({ isLoading: true, searchTerm: value });
        // fake that we called the API, hue hue hue hue hue
        const wait = getRandomInt(500) + 100;
        setTimeout(() => this.setState({ isLoading: false }), wait);
    
        // send the search term to be stored for analytics
        const client = new Client();
        client.sendData(value)
            .then(response => {
                console.log(response);
            })
        .catch(function (err) {
            console.log("failed sending search data " + err);
        });
    }

    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            console.log("enter was pressed")
            this.handleSearch();
        }
    }

    handleDrinksChange = (event) => {
        console.log("Changing drinks")
        this.setState({ drinks: event.target.checked });
    }

    handleFoodChange = (event) => {
        console.log("changing food")
        this.setState({ food: event.target.checked });
    }

    handleEventsChange = (event) => {
        console.log("changing events")
        this.setState({ events: event.target.checked });
    }

    handleDaysChange = (event) => {
        console.log("Updating day")
        this.setState({ day: event.target.value });
    }

  render() {
      console.log(this.state);
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
                        deals {
                            description
                            days
                            types
                        }
                    }
                }
            }
        }
    `}>
        {data => (
        <Layout>
            <SearchHeader 
                handleSearch={this.handleSearch}
                searchOnChange={this.searchOnChange} 
                handleKeyPress={this.handleKeyPress}
                handleFood={this.handleFoodChange}
                handleDrinks={this.handleDrinksChange}
                handleEvents={this.handleEventsChange}
                handleDaysChange={this.handleDaysChange}
                day={this.state.day}
                food={this.state.food}
                drinks={this.state.drinks}
                events={this.state.events}
            />
            <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
            }}
            >
            <SEO title="Home" keywords={[`deals`, `Madison`, `Bars`]} />
            <LocationList
                edges={data.allDataYaml.edges}
                isLoading={this.state.isLoading}
                searchTerm={this.state.searchTerm}
                day={this.state.day}
                drinks={this.state.drinks}
                food={this.state.food}
                events={this.state.events}
            />
            </div>
        </Layout>
        )}
    </StaticQuery>)
    }
    
}

export default IndexPage