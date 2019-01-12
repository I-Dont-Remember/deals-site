import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import LocationList from "../components/locationList"
import { Typography } from "@material-ui/core";

const items = [
  { id: 1, name: "sconnie bar" },
  { id: 2, name: "other bar" },
  { id: 3, name: "bar3 bar" },
  { id: 4, name: "sconnifdfe bar" },
  { id: 5, name: "hoopie doopei bar" },
  { id: 6, name: "a different tavern" },
  { id: 7, name: "some tavern" },
]

class IndexPage extends React.Component {
    state = {
        searchValue: "",
        isLoading: true,
    }

    searchOnChange = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    componentDidMount() {
        // call api here for initial deals
        setTimeout(() => this.setState({ isLoading: false }), 1000)
      }

    filterItems() {
        const value = this.state.searchValue
        return items.filter(i => { return i.name.indexOf(value) !== -1})
    }

    render() {
        return (
            <Layout>
                <Header searchOnChange={this.searchOnChange}/>
                <div
                    style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                    }}
                >
                    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                    <Button color="primary">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                    <div>
                        {this.state.searchValue}
                    </div>
                    <LocationList items={this.filterItems()} isLoading={this.state.isLoading}/>
                </div>
            </Layout>
          )
    }
}

export default IndexPage
