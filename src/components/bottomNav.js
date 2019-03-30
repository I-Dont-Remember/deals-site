import React from "react"
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { navigate } from "gatsby"

import InfoOutlined from "@material-ui/icons/InfoOutlined"
import PlaceOutlined from "@material-ui/icons/PlaceOutlined"
import LocalBarOutlined from "@material-ui/icons/LocalBarOutlined"
import NotListedLocationOutlined from "@material-ui/icons/NotListedLocationOutlined"
import MapOutlined from "@material-ui/icons/MapOutlined"
import StarBorderOutlined from "@material-ui/icons/StarBorderOutlined"
import MonetizationOnOutlined from "@material-ui/icons/MonetizationOnOutlined"
import AutorenewOutlined from "@material-ui/icons/AutorenewOutlined"

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
            navigate("/map/")
        case 3:
            navigate("/random/");
            break;
        case 4:
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
        >
            <BottomNavigationAction label="Deals" icon={<MonetizationOnOutlined />} />
            <BottomNavigationAction label="Bars" icon={<LocalBarOutlined />} />
            <BottomNavigationAction label="Map" icon={<PlaceOutlined />} />
            <BottomNavigationAction label="Random" icon={<AutorenewOutlined />} />
            <BottomNavigationAction label="Info" icon={<InfoOutlined />} />
        </BottomNavigation>
        </div>
        )
    }
}

export default BottomNav