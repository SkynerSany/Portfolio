import { Button, Form, Modal } from "react-bootstrap";
import { IModal, IModalCompany } from "./modal.interfaces";

function ModalCompany({ companyName }: IModalCompany) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Название компании</Form.Label>
        <Form.Control type="text" placeholder="вставьте название" value={ companyName } />
      </Form.Group>
    </Form>
  )
}

export default function ModalWindow({ type, show, handleClose, data }: IModal) {


  return (
    <Modal show={show} onHide={handleClose} backdrop="static" onClick={(e: Event) => e.stopPropagation()}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            <ModalCompany companyName={ data.name }/>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}