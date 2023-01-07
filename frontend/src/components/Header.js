import { Container, Navbar } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar bg="info" variant="light">
      <Container>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
