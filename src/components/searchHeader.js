import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import SearchIcon from "@material-ui/icons/Search"
import NearMe from "@material-ui/icons/NearMe"
import Close from "@material-ui/icons/Close"
import Input from "@material-ui/core/Input"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper"
import Checkbox from "@material-ui/core/Checkbox"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Select, { components } from "react-select"
import Divider from "@material-ui/core/Divider"
import { InputAdornment } from "@material-ui/core";

const inputId = "search-input";

const styles = {
  appBar: {
    padding: "6px",
    alignItems: "center"
  },
  toolbar: {
    maxWidth: "600px",
    width: "100%",
    justifyContent: "center",
  },
  searchInput: {
    width: "75%",
    margin: "3%",
    maxWidth: "300px",
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  paper: {
    display: "flex",
    width: "90%",
    alignItems: "center",
    padding: "2px 4px",
    maxWidth: "400px",
    marginTop: "2%",
  },
  selectComponent: {
    color: "black",
    position: "relative",
    width: "60%",
    maxWidth: "300px",
  },
  daySelect: {
      color: "black"
  },
  control: {
    position: "relative",
    width: "100%",
  },
  formLabel: {
    margin: "0",
    flex: 1
  },
  checkbox: {
    color: "white"
  },
  formSelect: {
    marginTop: "15px",
    width: "40%",
    flex: 3
  },
  formControl: {
    width: "100%"
  },
  formGroup: {
    justifyContent: "center",
  },
  locationButton: {
    padding: "8px",
  },
}

function shimLocationOptions(locations) {
  let options = []
  for (let i in locations) {
    let o = { value: locations[i].fields.slug, label: locations[i].name }
    options.push(o)
  }
  return options
}

const selectComponent = props => (
  <div style={styles.selectComponent}>
    <components.Control {...props} />
  </div>
)

const controlComponent = props => (
  <div style={styles.control}>
    <components.Control {...props} />
  </div>
)

const daySelectComponent = props => (
  <div style={styles.daySelect}>
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
            <Paper style={styles.paper} elevation={1}>
              <Input
                id={inputId}
                style={styles.searchInput}
                placeholder="search a word..."
                onChange={this.props.searchOnChange}
                onKeyPress={this.props.handleKeyPress}
                endAdornment={
                    <InputAdornment>
                        <IconButton
                            onClick={this.props.handleClear}
                        >
                            <Close />
                        </IconButton>
                    </InputAdornment>
                }
              />
              <Divider style={styles.divider} />
              <IconButton onClick={this.props.handleSearch}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Toolbar>
          <Toolbar style={styles.toolbar}>
            <FormControl component="fieldset" style={styles.formControl}>
              <FormGroup row style={styles.formGroup}>
                <FormControlLabel
                  style={styles.formLabel}
                  control={
                    <Checkbox
                      style={styles.checkbox}
                      checked={this.props.drinks}
                      onChange={this.props.handleDrinks}
                    />
                  }
                  labelPlacement="bottom"
                  label="Drinks"
                />
                <FormControlLabel
                  style={styles.formLabel}
                  control={
                    <Checkbox
                      style={styles.checkbox}
                      checked={this.props.food}
                      onChange={this.props.handleFood}
                    />
                  }
                  labelPlacement="bottom"
                  label="Food"
                />
                <FormControlLabel
                  style={styles.formLabel}
                  control={
                    <Checkbox
                      style={styles.checkbox}
                      checked={this.props.events}
                      onChange={this.props.handleEvents}
                    />
                  }
                  labelPlacement="bottom"
                  label="Events"
                />
                <FormControl style={styles.formSelect}>
                  <Select
                    native
                    value={this.props.dayOption}
                    onChange={this.props.handleDaysChange}
                    options={this.props.dayOptions}
                    components={{
                      Control: controlComponent,
                      SelectContainer: daySelectComponent,
                    }}
                    isSearchable={false}
                  />
                </FormControl>
              </FormGroup>
            </FormControl>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default SearchHeader
