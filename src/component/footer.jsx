import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <Navbar fixed="bottom" style={{ height: '5vh', margin: '0' }}>
            <Container>
                <Navbar.Collapse style={{ display: 'flex', justifyContent: 'center' }}>
                    <Nav>
                        <Nav.Link href="/" style={{ width: '22vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
                                <img style={{ width: '35%'}} src="./footer_icons/free-icon-home-4690939.png" />
                        </Nav.Link>
                        <Nav.Link href="/search" style={{ width: '22vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
                                <img style={{ width: '35%'}} src="./footer_icons/free-icon-compass-484136.png" />
                            </Nav.Link>
                        <Nav.Link href="/add" style={{ width: '22vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
                                <img style={{ width: '35%'}} src="./footer_icons/free-icon-add-button-7324985.png" />
                        </Nav.Link>
                        <Nav.Link href="/user" style={{ width: '22vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
                                <img style={{ width: '35%'}} src="./footer_icons/free-icon-user-847969.png" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;