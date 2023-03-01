import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";

import '../App.css';



export const Header = () => {

    return (
      <>
     
     <div>
      
      
     <Navbar bg="transparent" fixed="top" expand="lg" variant="dark" style={{height: 70}}>
      <Container fluid>
        <Navbar.Brand href="#" id="webname"><b>URBAN ESTATE</b>
          {/* <div>
        <img
              src="../logo2.png"
              width="100px"
              height="100px"
              // className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            
            </div> */}
            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto "
            
            
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

            
            

            


          </Nav>
          <Form className="d-flex">
           
            <Button variant="light">Post Property For Free</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
     
      </>
    );
  };
  