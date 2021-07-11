
import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
function Navigation()
{
   
        return(
            <div>
                 <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Web site </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">cinema</Nav.Link>
    
    </Nav>
    </Container>
  </Navbar>

            </div>
        );
   
}
export default Navigation;

