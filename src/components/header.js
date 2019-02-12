import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import ArrowBack from "@material-ui/icons/ArrowBack"
import { navigate } from "gatsby"

const styles = {
  toolbar: {
    paddingLeft: `5px`,
  },
  backButton: {},
  title: {
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "3%",
    fontSize: "40px"
  }
}

class Header extends React.Component {
  handleBack = function() {
    navigate("/");
  }

  render() {
    console.log(this.props)

    if (this.props.noButton) {
        return (
            <AppBar position="static">
                {this.props.title
                    ?(<h3 style={styles.title}>{this.props.title}</h3>)
                    :(<Toolbar style={styles.toolbar} />)}
            </AppBar>
        )
    }

    return (
      <div>
        <AppBar position="static">
          <Toolbar style={styles.toolbar}>
            <IconButton style={styles.backButton} onClick={this.handleBack}>
              <ArrowBack />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header
