import Navbar from "react-bootstrap/Navbar";
//import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
//import Form from "react-bootstrap/Form";
//import FormControl from "react-bootstrap/FormControl";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import "./NavBarStyle.css";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
            <Navbar bg="white" expand="md" style={{position:'fixed',marginTop:'0, auto'}}>
                
                    <Link exact to="/">     
                    
                        <Logo/>                                              
                    
                    </Link>
                
                <Navbar.Toggle aria-controls="#navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll >
                        <Link exact to="/">     
                            Inicio                  
                        </Link>
                         <Link exact to="/itemList">   
                            Catalogo
                        </Link>
                        <Link exact to="/">     
                            Contacto                  
                        </Link>
                    </Nav>
                   
                    <Link exact to='/cart'>
                        <CartWidget />
                    </Link>
                </Navbar.Collapse>               
                    <div className='menuCatalogo d-flex flex-md-wrap flex-md-column'>
                        <ul>
                            <Link exact to='/categoria/Palitos'> 
                                <li className='nav-item'>Palitos    </li>
                            </Link>
                            <Link exact to='/categoria/Bombones'>
                                <li className='nav-item'>Bombones   </li>
                            </Link> 
                            <Link exact to='/categoria/Postres'>
                                <li className='nav-item'>Postres    </li>
                            </Link>
                            <Link exact to='/categoria/Familiar'>
                                <li className='nav-item'>Familiares </li>
                            </Link>
                            <Link exact to='/categoria/Tentaciones'>
                                <li className='nav-item'>Tentaciones</li>
                            </Link>
                            <Link exact to='/categoria/Tortas'>
                                <li className='nav-item'>Tortas     </li>
                            </Link>
                            
                        </ul>              
                    </div>
               
            </Navbar>            
        </>
    )
}

export default NavBar;