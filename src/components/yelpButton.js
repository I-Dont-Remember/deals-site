import React from "react"
import Button from '@material-ui/core/Button'

const styles = {
    button: {
        marginTop: "10px"
    }
}

class YelpButton extends React.Component {

    onClick = () => {
        window.location.href = this.props.link;
    }

    render() {
        return (
            <div>
                <Button
                    style={styles.button}
                    variant="contained"
                    color="primary"
                    onClick={this.onClick}
                >
                Yelp
                </Button>
            </div>
    )
    }
}

export default YelpButton