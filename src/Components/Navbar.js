import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Nav.css'

export default function Navbar_() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to={'index'}>CGEC - HOSTEL</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link></Nav.Link>
            <Nav.Link></Nav.Link>
            <Nav.Link></Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
          <Nav className="nav_bar">
            <Link to={"/About"}>About</Link>
            <Link to={"/Contact"}>Contact</Link>
            <Link to={""}>Login</Link>
            <Link to={""}>signup</Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
