import React from 'react';
import { Container, Image, Nav, Navbar} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar
                className="nav-Wrapper p-0"
                collapseOnSelect
                expand="lg"
                sticky="top"
                style={{ backgroundColor: "#1BA370" }}
                variant="dark"
            >
                <Container>
                    <Navbar.Brand className="flex" as={HashLink} to="/home">
                        <Image
                            width="76px"
                            height="50px"
                            src="https://i.ibb.co/9wKG2Qb/Screenshot-2021-11-12-075157-removebg-preview.png"
                            fluid
                        />
                        <p className="pbotom mb-0"> Brothers Car</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end nav_btn">
                        <Nav.Link as={HashLink} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/cars">
                            Explore
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/aboutUs">
                            AboutUs
                        </Nav.Link>

                        {user?.email ? (
                            <>
                                <Nav.Link as={HashLink} to="/orders">
                                    My Orders
                                </Nav.Link>

                                <Navbar.Text
                                        className="text-info_lol"
                                >
                                    <a href="#login">
                                        {user?.displayName || user.email}
                                    </a>
                                </Navbar.Text>
                                <Nav.Link
                                    onClick={logOut}
                                    as={HashLink}
                                    to="/logIn"
                                    className="login"
                                >
                                    LogOut
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link
                                    as={HashLink}
                                    to="/logIn"
                                    className="login"
                                >
                                    LogIn
                                </Nav.Link>
                                <Nav.Link
                                    as={HashLink}
                                    to="/register"
                                    className="register"
                                >
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;