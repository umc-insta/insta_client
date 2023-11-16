import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Navbar fixed="bottom" style={{ height: '5vh', margin: '0', backgroundColor: 'white' }}>
            <Container>
                <Navbar.Collapse style={{ display: 'flex', justifyContent: 'center' }}>
                    <Nav>
                        <Link to="/home" style={{ width: '22vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
                                <img style={{ width: '35%'}} src="./icons/home.png" />
                        </Link>
                        <Link to="/search" style={{ width: '22vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
                                <img style={{ width: '35%'}} src="./icons/compass.png" />
                            </Link>
                        <Link to="/add" style={{ width: '22vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
                                <img style={{ width: '35%'}} src="./icons/add.png" />
                        </Link>
                        <Link to="/user" style={{ width: '22vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
                                <img style={{ width: '35%'}} src="./icons/user.png" />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;