import React from "react"
import Fastfood from "@material-ui/icons/Fastfood"
import Person from "@material-ui/icons/Person"
import LocalBar from "@material-ui/icons/LocalBar"

const styles = {
    ul: {
        listStyle: "none"
    }
}

function chooseIcons(types) {
    // Don't forget we can have multiple types
    const map = {
        "Food": <Fastfood />,
        "Drinks": <LocalBar />,
        "Events": <Person />
    }
    if (types) {
        return map[types[0]]
    }
    return ""
}

class Deals extends React.Component {
    render() {
        return (
        <ul
            style={styles.ul}
        >
            {
                this.props.deals.map(d=> {
                    return (<li key={Math.random()}>
                        {chooseIcons(d.types)}  {d.description}{d.time?" | "+d.time:""}<i>{this.props.showDay?" | "+d.days:""}</i>
                    </li>)
                })
            }
        </ul>

        )
    }
}

export default Deals