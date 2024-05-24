import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SiteNavbar(props) {
    return <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/">Homepage</Nav.Link>
                    <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}