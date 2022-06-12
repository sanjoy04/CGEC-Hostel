import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Nav.css'

export default function Navbar_() {
  return (
    <Navbar style={{ display: 'flex' }} collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ display: 'flex', flexDirection: 'row' }}>
        <Navbar.Brand><Link to={'index'}>CGEC - HOSTEL</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="nav_bar" id="responsive-navbar-nav">
          <Link to={"/About"}>About</Link>
          <Link to={"/Contact"}>Contact</Link>
          <Link to={""}>Login</Link>
          <Link to={""}>signup</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
