import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/navbar/xWin-logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function BasicExample() {
  return (
    <Navbar fluid fixed="top" bg="white">
      <Container>
        <Col lg={5}>
          <Navbar.Brand href="#home">
            <img alt="" src={logo} className="d-inline-block align-top" />
          </Navbar.Brand>
        </Col>
        <Col lg={5}>
          <Nav>
            <Button className="m-1" variant="primary" size="lg">
              Account Opening
            </Button>

            <Button className="m-1" variant="info">
              Free Diagnosis
            </Button>
            <Button className="m-1" variant="outline-primary" size="lg">
              Login
            </Button>
          </Nav>
        </Col>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
