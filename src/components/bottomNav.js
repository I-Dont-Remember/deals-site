import React from "react"
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { navigate } from "gatsby"

import RestoreIcon from '@material-ui/icons/Restore';

const styles = {
    nav: {
        bottom: 0,
        position: "fixed",
        width: "100%"
    }
}

const handleChange = (event, value) => {
    console.log("navigate to " + value);
    switch (value) {
        case 1:
            navigate("/locations/");
            break;
        case 2:
            navigate("/info/");
            break;
        default:
            navigate("/");
    }
}

class BottomNav extends React.Component {

    render() {
        return (
        <div>
        <BottomNavigation
            style={styles.nav}
            value={this.props.page}
            onChange={handleChange}
            showLabels
        >
            <BottomNavigationAction label="deals" icon={<RestoreIcon />} />
            <BottomNavigationAction label="locations" icon={<RestoreIcon />} />
            <BottomNavigationAction label="info" icon={<RestoreIcon />} />
        </BottomNavigation>
        </div>
        )
    }
}

export default BottomNav