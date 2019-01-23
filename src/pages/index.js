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

class IndexPage extends React.Component {
    state = {
        inputValue: "",
        searchTerm: "",
        isLoading: false
    };

    searchOnChange = event => {
        // if value is empty (user backspaced to nothing), show everything again
        const value = event.target.value.toLowerCase();
        let update = { inputValue: value };
        if (value == "") {
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
                        deals {
                            description
                            days
                        }
                    }
                }
            }
        }
    `}>
        {data => (
        <Layout>
            <SearchHeader handleSearch={this.handleSearch} searchOnChange={this.searchOnChange}/>
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
            />
            </div>
        </Layout>
        )}
    </StaticQuery>)
    }
    
}

export default IndexPage