import PropTypes from "prop-types"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import ArrowBack from "@material-ui/icons/ArrowBack"
import { navigate } from "gatsby"

const styles = {
    toolbar: {
        paddingLeft: `5px`
    },
    backButton: {}
};

class Header extends React.Component {

    handleBack = function () {
        navigate("/");
    }

    render() {
        return (
    <div>
        <AppBar position="static">
            <Toolbar style={styles.toolbar}>
                <IconButton style={styles.backButton} onClick={this.handleBack}><ArrowBack /></IconButton>
            </Toolbar>
        </AppBar>
    </div>
        )
    }
}

export default Header
