import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

class LocationItem extends React.Component {
    render() {
        return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                {this.props.id}
                be
                bullllll
                nev
                bulllll
                lent
                </Typography>
            </CardContent>
        </Card>
        )
    }
}

export default LocationItem