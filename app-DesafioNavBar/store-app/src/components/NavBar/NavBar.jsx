import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown"
import Nav from "react-bootstrap/Nav";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import "./NavBarStyle.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Navbar bg="white" expand="md" >
                
                    <Link exact to="/">                      
                        <Logo/> 
                    </Link>
                
                <Navbar.Toggle aria-controls="#navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-2 p-1 my-lg-0"
                        style={{ maxHeight: '12em', Width:"100vw"  }}
                        navbarScroll >
                        <Link exact to="/">     
                            Inicio                  
                        </Link>
                        <NavDropdown title="Catalogo" id="navbarScrollingDropdown">
                            <NavDropdown.Item >
                            <Link exact to='/categoria/Bombones'>
                                <li className='nav-item'>Bombones   </li>
                            </Link> 
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                            <Link exact to='/categoria/Familiar'>
                                <li className='nav-item'>Familiares </li>
                            </Link>
                            </NavDropdown.Item>                           
                            <NavDropdown.Item >
                            <Link exact to='/categoria/Palitos'> 
                                <li className='nav-item'>Palitos    </li>
                            </Link> 
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                            <Link exact to='/categoria/Postres'>
                                <li className='nav-item'>Postres    </li>
                            </Link>    
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                            <Link exact to='/categoria/Tentaciones'>
                                <li className='nav-item'>Tentaciones</li>
                            </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                            <Link exact to='/categoria/Tortas'>
                                <li className='nav-item'>Tortas     </li>
                            </Link>
                            </NavDropdown.Item>
                        </NavDropdown>                        
                        <Link exact to="/">     
                            Contacto                  
                        </Link>
                        <Link exact to='/cart' id="cart">
                            <CartWidget />
                        </Link>
                        
                    </Nav>                   
                </Navbar.Collapse>               
            </Navbar>            
        </>
    )
}

export default NavBar;