import React from 'react'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const modalStyle = {
    position: "absolute",
    left: `5%`,
    top: `5%`,
    width: `90%`,
    height: `80%`,
    backgroundColor: `#ffffff`
}

class LocationModal extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      render() {
          return (
              <div>
                  <Button onClick={this.handleOpen}>Click for Modal</Button>
                  <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                  >
                  <div style={modalStyle}>
                    <Typography variant="h6" id="modal-title">
                        Text in a modal
                    </Typography>
                  </div>
                  </Modal>
              </div>
          )
      }
}

export default LocationModal