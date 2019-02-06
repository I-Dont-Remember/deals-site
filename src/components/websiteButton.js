import React from "react"
import Button from '@material-ui/core/Button'

const styles = {
    button: {
        marginTop: "10px",
        marginLeft: "8px"
    }
}

class WebsiteButton extends React.Component {
    onClick = () => {
        window.location.href = this.props.link;
    }

    render() {
        return (
            <Button
                style={styles.button}
                variant="contained"
                color="inherit"
                onClick={this.onClick}
            >
            Website
            </Button>
    )
    }
}


export default WebsiteButton