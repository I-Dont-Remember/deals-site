import React from "react"
import Modal from "@material-ui/core/Modal"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const modalStyle = {
  position: "absolute",
  left: `5%`,
  top: `5%`,
  width: `90%`,
  height: `80%`,
  backgroundColor: `#ffffff`,
}

class LocationModal extends React.Component {
  render() {
    return (
      <div>
        <Modal open={this.props.open} onClose={this.props.handleClose}>
          <div style={modalStyle}>
            <Button onClick={this.props.handleClose} color="primary">Close me</Button>
            <Typography variant="h6" id="modal-title">
              Text in a modal for {this.props.id}
            </Typography>
          </div>
        </Modal>
      </div>
    )
  }
}

export default LocationModal
