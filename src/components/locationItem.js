import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LocationModal from '../components/locationModal'
class LocationItem extends React.Component {
    render() {
        return (
        <Card>
            <CardContent>
                <Button>
                    <Typography variant="h5" component="h2">
                    {this.props.id} Location Name
                    </Typography>
                </Button>
                <LocationModal />
                <Typography component="p">
                    <ul>
                        <li>hi</li>
                        <li>anotha one</li>
                        <li>a third one</li>
                    </ul>
                </Typography>
                <Button color="secondary">Hello</Button>
            </CardContent>
        </Card>
        )
    }
}

export default LocationItem