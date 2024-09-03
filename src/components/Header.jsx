import { Nav, Container } from "react-bootstrap";

// Header component
const Header = () => {
  const date = new Date();
  return (
    <Nav className="bg-primary p-2 background">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Displays the title and the current date */}
        <h3 className="fw-bold">Habit Tracker</h3>
        <span>{date.toDateString()}</span>
      </Container>
    </Nav>
  );
};

export default Header;
