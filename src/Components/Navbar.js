import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navbar_() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Sukanta Chhatrabas</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="right_align" id="responsive-navbar-nav">
        <Nav className="nav_elements">
          <Nav.Link>
            <Link className="link" to={"/About"}>About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to={"/Contact"}>Contact</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to={"/"}>Login/Register</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
