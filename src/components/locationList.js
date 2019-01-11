import React from 'react'
import LocationItem from './locationItem';
import List from '@material-ui/core/List'


class LocationList extends React.Component {
    render() {
        return (
        <List>
            {this.props.items.map(i => <LocationItem id={i.id} />)}
        </List>
        )
    }
}

export default LocationList