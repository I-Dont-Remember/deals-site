import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Button from '@material-ui/core/Button'
import ItemList from '../components/itemList'

const items = [
    { name: "name1"},
    { name: "name2"},
    { name: "name3"}
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button variant='contained' color="primary">
        Hello Button
    </Button>
    <ItemList items={items}/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
