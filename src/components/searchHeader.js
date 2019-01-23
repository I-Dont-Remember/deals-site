import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper"

// const oldSearchHeader = ({ siteTitle }) => (
//   <div
//     style={{
//       background: `#f6755e`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </div>
// )

const styles = {
    appBar: {
        padding: "6px"
    },
    toolbar: {
        width: "100%",
    },
    searchInput: {
        width: "75%",
        margin: "3%",
        maxWidth: "300px"
    },
    paper: {
        display: "flex",
        width: "90%",
        alignItems: "center",
        padding: "2px 4px",
        maxWidth: "400px"
    }
};

class SearchHeader extends React.Component {
    render() {
        return (
      <div>
        <AppBar style={styles.appBar} position="static">
            <Toolbar style={styles.toolbar}>
                <Paper style={styles.paper} elevation={1}>
                    <InputBase style={styles.searchInput} placeholder="try 'wings' or 'shots'..." onChange={this.props.searchOnChange} onKeyPress={this.props.handleKeyPress}/>

                    <IconButton onClick={this.props.handleSearch}><SearchIcon /></IconButton>
                </Paper>
            </Toolbar>
        </AppBar>
      </div>
    )
    }
}

export default SearchHeader
