import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper"
import Checkbox from '@material-ui/core/Checkbox'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select, { components } from "react-select"
import Divider from '@material-ui/core/Divider'

const styles = {
    appBar: {
        padding: "6px"
    },
    toolbar: {
        width: "100%",
        justifyContent: "center"
    },
    searchInput: {
        width: "75%",
        margin: "3%",
        maxWidth: "300px"
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4
    },
    paper: {
        display: "flex",
        width: "90%",
        alignItems: "center",
        padding: "2px 4px",
        maxWidth: "400px",
        marginTop: "2%"
    },
    selectComponent: {
        position: "relative",
        width: "92%",
        maxWidth: "400px"
    },
    control: {
        position: "relative",
        width: "100%"
    }
};

function shimLocationOptions(locations) {
    let options = [];
    for (let i in locations) {
        let o = { value: locations[i].fields.slug, label: locations[i].name }
        options.push(o);
    }
    console.log("O: " + JSON.stringify(options));
    return options;
}

const selectComponent = (props) => (
    <div style={styles.selectComponent}>
        <components.Control {...props} />
    </div>
)

const controlComponent = (props) => (
    <div style={styles.control}>
        <components.Control {...props} />
    </div>
)

class SearchHeader extends React.Component {
    // TODO: combine location names & keywords here for autosuggestion
    render() {
        return (
      <div>
        <AppBar style={styles.appBar} position="static">
            <Toolbar style={styles.toolbar}>
                    <Select style={{ position: "relative", width: "421px"}}
                        components={{Control: controlComponent, SelectContainer: selectComponent }}
                        options={shimLocationOptions(this.props.locations)}
                        value={this.props.search}
                        onChange={this.props.handleSearchChange}
                        onKeyDown={this.props.onKeyDown}
                        placeholder="Search locations or phrases"
                        isClearable
                    />
            </Toolbar>
            <Toolbar style={styles.toolbar}>
                <FormControl component="fieldset">
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={this.props.drinks}
                                    onChange={this.props.handleDrinks} 
                                />
                            }
                            label="Drinks"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={this.props.food}
                                    onChange={this.props.handleFood}
                                />
                            }
                            label="Food"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={this.props.events}
                                    onChange={this.props.handleEvents} 
                                />
                            }
                            label="Events"
                        />

                    </FormGroup>
                    <Select
                        native
                        value={this.props.dayOption}
                        onChange={this.props.handleDaysChange}
                        options={this.props.dayOptions}
                    />
                </FormControl>
            </Toolbar>
        </AppBar>
      </div>
    )
    }
}

export default SearchHeader
