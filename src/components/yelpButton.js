import React from "react"
import Button from '@material-ui/core/Button'

const styles = {
    button: {
        marginTop: "10px",
        marginLeft: "8px"
    }
}

class YelpButton extends React.Component {

    onClick = () => {
        window.location.href = this.props.link;
    }

    render() {
        return (
            <Button
                style={styles.button}
                variant="contained"
                color="primary"
                onClick={this.onClick}
            >
            Yelp
            </Button>
    )
    }
}

export default YelpButton