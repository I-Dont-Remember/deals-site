import React from "react"
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { navigate } from "gatsby"

import InfoOutlined from "@material-ui/icons/InfoOutlined"
import PlaceOutlined from "@material-ui/icons/PlaceOutlined"
import LocalBarOutlined from "@material-ui/icons/LocalBarOutlined"
import NotListedLocationOutlined from "@material-ui/icons/NotListedLocationOutlined"

const styles = {
    nav: {
        bottom: 0,
        position: "fixed",
        width: "100%",
        boxShadow: "0px -5px 20px grey"
    }
}

const handleChange = (event, value) => {
    console.log("navigate to " + value);
    switch (value) {
        case 1:
            navigate("/locations/");
            break;
        case 2:
            navigate("/random/");
            break;
        case 3:
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
            <BottomNavigationAction label="Deals" icon={<LocalBarOutlined />} />
            <BottomNavigationAction label="Bars" icon={<PlaceOutlined />} />
            <BottomNavigationAction label="Random" icon={<NotListedLocationOutlined />} />
            <BottomNavigationAction label="Info" icon={<InfoOutlined />} />
        </BottomNavigation>
        </div>
        )
    }
}

export default BottomNav