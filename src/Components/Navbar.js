import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navbar_() {
  return (
<<<<<<< HEAD
    <Navbar style={{ display: 'flex' }} collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ display: 'flex', flexDirection: 'row' }}>
        <Navbar.Brand><Link to={'index'}>CGEC - HOSTEL</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="nav_bar" id="responsive-navbar-nav">
          <Link to={"/About"}>About</Link>
          <Link to={"/Contact"}>Contact</Link>
          <Link to={""}>Login</Link>
          <Link to={""}>signup</Link>
=======
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Sukanta Chhatrabas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="right_align" id="responsive-navbar-nav">
          <Nav className="nav_elements">
            <Nav.Link>
              <Link className="link" to={"/About"}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to={"/Contact"}>
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to={"/"}>
                Login/Register
              </Link>
            </Nav.Link>
          </Nav>
>>>>>>> 63673bdc328cf11c62210a09ea58a687376afe77
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
