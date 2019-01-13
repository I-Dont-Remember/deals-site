import React from "react"
import Modal from "@material-ui/core/Modal"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import DealsContainer from "../components/dealsContainer"

const modalStyle = {
  position: "absolute",
  left: `5%`,
  top: `5%`,
  width: `90%`,
  height: `80%`,
  backgroundColor: `#ffffff`,
  display: "flex",
  flexDirection: "column"
}

class LocationModal extends React.Component {
  render() {
    const location = this.props.location

    return (
      <div>
        <Modal open={this.props.open} onClose={this.props.handleClose}>
          <div style={modalStyle}>
            <Button onClick={this.props.handleClose} color="primary">Close me</Button>
            <Typography variant="h6" id="modal-title">
              {location.name}
            </Typography>
            <Typography component="h3">
                site: {location.website}
            </Typography>            
            <Typography component="h3">
                phone: {location.phoneNumber}
            </Typography>            
            <Typography component="h3">
                Addr: {location.displayAddress}
            </Typography>
            <DealsContainer deals={location.deals} />
          </div>
        </Modal>
      </div>
    )
  }
}

export default LocationModal
