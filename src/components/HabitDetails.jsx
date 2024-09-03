import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeStatus } from "../features/habitsSlice";

const HabitDetails = ({ habit, habit: { details } }) => {
  const dispatch = useDispatch();

  // Handler to change status to 'done' when a 'none' status icon is clicked
  const checkStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: "done",
          },
        ],
      })
    );
  };
  // Handler to change status to 'fail' when a 'done' status icon is clicked
  const doneStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: "fail",
          },
        ],
      })
    );
  };
  // Handler to change status to 'none' when a 'fail' status icon is clicked
  const failStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: "none",
          },
        ],
      })
    );
  };
  return (
    <Row>
      {details.map((detail) => (
        <Fragment key={detail.day}>
          <Col>
            <p className="day-headings">{detail.day}</p>
            {/* Icon for setting status to 'done' if current status is 'none' */}
            {detail.status === "none" && (
              <i
                className="fa-solid fa-check"
                onClick={() => checkStatusHandler([habit.title, detail.day])}
              ></i>
            )}
            {/* Icon for setting status to 'fail' if current status is 'done' */}
            {detail.status === "done" && (
              <i
                className=" fa-lg fa-solid fa-circle-check done"
                onClick={() => doneStatusHandler([habit.title, detail.day])}
              ></i>
            )}
            {/* Icon for resetting status to 'none' if current status is 'fail' */}
            {detail.status === "fail" && (
              <i
                className=" fa-lg fa-solid fa-circle-xmark fail"
                onClick={() => failStatusHandler([habit.title, detail.day])}
              ></i>
            )}
          </Col>
        </Fragment>
      ))}
    </Row>
  );
};

export default HabitDetails;
