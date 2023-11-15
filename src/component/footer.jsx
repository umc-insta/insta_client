import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <Navbar fixed="bottom" style={{ height: '5vh', margin: '0', backgroundColor: 'white' }}>
            <Container>
                <Navbar.Collapse style={{ display: 'flex', justifyContent: 'center' }}>
                    <Nav>
                        <Nav.Link href="/home" style={{ width: '22vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
                                <img style={{ width: '35%'}} src="./icons/home.png" />
                        </Nav.Link>
                        <Nav.Link href="/search" style={{ width: '22vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
                                <img style={{ width: '35%'}} src="./icons/compass.png" />
                            </Nav.Link>
                        <Nav.Link href="/add" style={{ width: '22vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
                                <img style={{ width: '35%'}} src="./icons/add.png" />
                        </Nav.Link>
                        <Nav.Link href="/user" style={{ width: '22vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
                                <img style={{ width: '35%'}} src="./icons/user.png" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;