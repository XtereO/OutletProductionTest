import {Navbar,Container, Nav, Dropdown} from "react-bootstrap"
import {NavLink} from "react-router-dom"

let Header=()=>{
    return<div>
        <Navbar bg="primary" fixed="top" collapseOnSelect expand="md" variant="dark">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/aboutus" style={{fontSize:"1.5em"}} className="NavbarLink mr-4">
                        Outlet-SPb
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><NavLink to="/rims/0" className="NavbarLink mr-4">
                            Оправы
                        </NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/sunglasses/0" className="NavbarLink mr-4">
                            Солнцезащитные очки
                        </NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/lens" className="NavbarLink mr-4">
                            Линзы
                        </NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/accessuars/0" className="NavbarLink mr-4">
                            Аксессуары
                        </NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}

export default Header