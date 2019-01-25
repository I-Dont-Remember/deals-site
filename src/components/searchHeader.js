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
import Select from "@material-ui/core/Select"
import Divider from '@material-ui/core/Divider'

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
    daySelect: {
        minWidth: `25%`,
        marginLeft: `5%`,
        marginTop: 0
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
                    <Divider style={styles.divider} />
                    <IconButton onClick={this.props.handleSearch}><SearchIcon /></IconButton>
                </Paper>
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
                            style={styles.daySelect}
                            value={this.props.day}
                            onChange={this.props.handleDaysChange}
                            >
                            <option value="Mon">Monday</option>
                            <option value="Tue">Tuesday</option>
                            <option value="Wed">Wednesday</option>
                            <option value="Thu">Thursday</option>
                            <option value="Fri">Friday</option>
                            <option value="Sat">Saturday</option>
                            <option value="Sun">Sunday</option>
                    </Select>
                </FormControl>
            </Toolbar>
        </AppBar>
      </div>
    )
    }
}

export default SearchHeader
