import React from "react"
import { Link } from "gatsby"

export default ({ pageContext: {location} }) => (
    <div>
        <h1>{location.name}</h1>
        <Link to="/">Home</Link>
    </div>
)
