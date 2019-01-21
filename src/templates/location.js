import React from "react"
import { Link } from "gatsby"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

import Header from "../components/header"
import Layout from "../components/layout"
import DealsContainer from "../components/dealsContainer"

const styles = {
    div: {
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 10,
    }
};

export default ({ pageContext: {location} }) => (
    <Layout>
        <Header title={location.name}/>
        <div style={styles.div}>
            <Card>
                <CardContent>
                    <h2>{location.name}</h2>
                    <h3>site: www.com</h3>
                    <DealsContainer deals={location.deals} />
                </CardContent>
            </Card>
        </div>
    </Layout>
)
