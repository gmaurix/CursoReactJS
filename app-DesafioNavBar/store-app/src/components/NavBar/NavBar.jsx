import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import {FaHospitalSymbol} from "react-icons/fa";


const NavBar=()=>{
 return (
     <>
         <Navbar bg="transparent" expand="md">
             <Navbar.Brand href="#">
                <FaHospitalSymbol/>
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
                 <Nav
                     className="mr-auto my-2 my-lg-0"
                     style={{ maxHeight: '100px' }}
                     navbarScroll >
                     <Nav.Link href="#action1">Inicio</Nav.Link>
                     <Nav.Link href="#action2">Quienes Somos</Nav.Link>
                     <Nav.Link href="#action2">Catalogo</Nav.Link>
                     <Nav.Link href="#action2">Contacto</Nav.Link>
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
             </Navbar.Collapse>
         </Navbar>
</>
 )
}


export default NavBar;