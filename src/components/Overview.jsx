// Importing dependencies and Component
import React, { Component } from "react";
import CreateHabit from "./CreateHabit";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import { deleteHabit } from "../features/habitsSlice";
import { useDispatch, useSelector } from "react-redux";
import "./overview.css";

const Overview = () => {
  // State to manage the visibility of the CreateHabit modal
  const [modalShow, setModalShow] = React.useState(false);

  // Hook to dispatch actions
  const dispatch = useDispatch();
  const { habits } = useSelector((state) => state.allHabits);

  // Function to handle deleting a habit
  const deleteHandler = (name) => {
    dispatch(deleteHabit(name));
  };

  return (
    <>
      {/* Layout for the header row */}
      <Row>
        <Col md={2} className="onMobile">
          <i className="fa-regular fa-calendar-minus"></i>
        </Col>
        <Col md={4} className="onMobile">
          <h4>Habits</h4>
        </Col>
      </Row>
      {/* List of habits */}
      <ListGroup>
        {habits.map((habit, index) => (
          <ListGroup.Item
            key={index}
            className="gradient mb-1 rounded habit-container"
          >
            <Row>
              <Col md={2} className="icons">
                {" "}
                <i className="fa-solid fa-feather me-3"></i>
              </Col>
              <Col md={8} className="habit-title">
                {habit.title}
              </Col>
              <Col md={1} className="icons">
                {/* Icon for deleting a habit */}
                <i
                  className="fa-solid fa-trash"
                  style={{ fontSize: "12px" }}
                  onClick={() => deleteHandler(habit.title)}
                ></i>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {/* Button to add a new habit */}
      <Row>
        <Col className="d-flex">
          <Button
            type="button"
            className="bg-primary mt-3 mobile"
            onClick={() => setModalShow(true)}
          >
            <i className="fa-solid"></i> Add Habit
          </Button>
          {/* Modal for creating a new habit */}
          <CreateHabit show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
      </Row>
    </>
  );
};

export default Overview;
