import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




export const Header = () => {
    return (
      <>
     
     <div>
     <Navbar fixed="top" expand="lg" bg="transparent" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#" id="webname">
          <div>
        {/* <img
              src="../sweethomelogo.png"
              width="70px"
              height="70px"
              // className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
            <NavDropdown title="For Buyers" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="For Tenants" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">For Buyers</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="For Owners" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">For Buyers</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="For Dealers/Builders" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">For Buyers</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            

            <NavDropdown title="Insights" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">For Buyers</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>


          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Post Property Free"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
     
      </>
    );
  };
  