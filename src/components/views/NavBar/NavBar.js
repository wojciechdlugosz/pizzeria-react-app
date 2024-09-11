import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
            <Navbar.Brand className="me-auto mx-2">Waiter.app</Navbar.Brand>
            <Nav className="ms-auto mx-2">
                <Nav.Item><Nav.Link as={NavLink} to="/">Home</Nav.Link></Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default NavBar;