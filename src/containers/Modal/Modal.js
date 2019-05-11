import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

/**
 * headerIcon (string)
 * headerMessage(string)
 * message(string)
 * ok (func)
 * moreButton (bool)
 * cancel (func)
 */
const CustomModal = ({ options }) => (
  <div>
    <Modal open={true} basic size='mini'>
      <Header icon={options.headerIcon} content={options.headerMessage} />
      <Modal.Content>
        <p>{options.message}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" inverted onClick={options.ok}>
          <Icon name="checkmark" /> Yes
        </Button>
        {options.moreButton ? (
          <Button basic color="red" inverted onClick={options.cancel}>
            <Icon name="remove" /> No
          </Button>
        ) : (
          <div />
        )}
      </Modal.Actions>
    </Modal>
  </div>
)

export default CustomModal
