import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import "./NavBarStyle.css";


const NavBar = () => {
    return (
        <>
            <Navbar bg="transparent" expand="md" style={{position:'fixed',marginTop:'0, auto'}}>
                <Navbar.Brand href="#">
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll >
                        <Nav.Link href="#action1">Inicio</Nav.Link>                       
                        <Nav.Link href="#action3">Catalogo</Nav.Link>
                        <Nav.Link href="#action4">Contacto</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Buscar"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="primary">Buscar</Button>
                    </Form>
                    <CartWidget />
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar;