import React from "react"
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { navigate } from "gatsby"

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
    nav: {
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
        )
    }
}

export default BottomNav