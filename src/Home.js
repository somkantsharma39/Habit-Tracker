// Importing Header, Overview & HabitDisplay component
import Header from "./components/Header";
import Overview from "./components/Overview";
import HabitDisplay from "./components/HabitDisplay";

// Importing Row, Col, and Container components from react-bootstrap
import { Row, Col, Container } from "react-bootstrap";

// import { useEffect } from 'react'

// import Typed from 'typed.js'

function Home() {
  return (
    <>
      <Header />
      {/* React Bootstrap Container for layout */}
      <Container>
        {/* React Bootstrap Row with margin-top */}
        <Row className="mt-5">
          <Col md={3}>
            {/* Overview component */}
            <Overview />
          </Col>
          <Col md={9}>
            {/*  HabitDetails Component*/}
            <HabitDisplay />
          </Col>
        </Row>
        <h4 className="text-light">
          <span className="tag"></span>
        </h4>
      </Container>
    </>
  );
}

export default Home;
