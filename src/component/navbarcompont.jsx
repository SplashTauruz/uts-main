import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar shadow-sm">
      <Container fluid>

        {/* Tombol hamburger akan muncul di ukuran kecil */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Isi menu yang bisa dikolaps */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="text-center">

            
            <LinkContainer to="/Home">
              <Nav.Link>HOME</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/About">
              <Nav.Link>ABOUT</Nav.Link>
            </LinkContainer>

            <NavDropdown title="PRODUK" id="basic-nav-dropdown">
              <LinkContainer to="/esteler">
                <NavDropdown.Item>Es Teler</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/stickymilk">
                <NavDropdown.Item>Sticky Milk</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/escemil">
                <NavDropdown.Item>Es Cemil</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/alpukatkocok">
                <NavDropdown.Item>Alpukat Kocok</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/location">
              <Nav.Link>LOCATION</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarComponent;
