// Importing all the dependencies
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addHabit } from "../features/habitsSlice";
import { details } from "../features/habitsSlice";

const CreateHabit = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle adding a new habit
  const AddHabitHandler = () => {
    // Dispatch the addHabit action with the current title and description
    dispatch(addHabit({ title, description, details }));
    props.onHide();
  };

  return (
    // Modal component to create a new habit
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Dialog className="modal-sm">
        <Modal.Body>
          <Form onSubmit={() => AddHabitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                autoFocus={true}
                required={true}
                // Update state on input change
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Short Description"
                // Bind description state to input value
                value={description}
                // Update state on input change
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Modal.Footer>
              <Button onClick={() => AddHabitHandler()}>Add Habit</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default CreateHabit;
