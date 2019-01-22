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
    },
    info: {
        marginBottom: `5px`
    }
};


export default ({ pageContext: {location} }) => (
    <Layout>
        <Header title={location.name}/>
        <div style={styles.div}>
            <Card>
                <CardContent>
                    <h3>{location.name}</h3>
                    {(location.display_address !== "") && <p style={styles.info}>{location.display_address}</p>}
                    {(location.phone_number !== "") && <p style={styles.info}>Phone: {location.phone_number}</p>}
                    {(location.website !== "") && <p style={styles.info}>Site: {location.website}</p>}
                    {(location.yelp_link !== "") && <p style={styles.info}>Yelp: {location.yelp_link}</p>}
                    <DealsContainer deals={location.deals} />
                </CardContent>
            </Card>
        </div>
    </Layout>
)
