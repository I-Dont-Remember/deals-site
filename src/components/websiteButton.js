import React from "react"
import Button from '@material-ui/core/Button'

const styles = {
    button: {
        marginTop: "12px"
    }
}

class WebsiteButton extends React.Component {
    onClick = () => {
        window.location.href = this.props.link;
    }

    render() {
        return (
            <div>
                <Button
                    style={styles.button}
                    variant="contained"
                    color="grey"
                    onClick={this.onClick}
                >
                Website
                </Button>
            </div>
    )
    }
}


export default WebsiteButton