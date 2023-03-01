import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const HeaderT = ({ changeNav}) => {
  return (
    <>
    <div className="navbar-fixed">
        <nav className={changeNav ? "blue":"red"}>
            <div className='nav-wrapper'>
                <a href="#" className='brand-logo'>
                    Logo

                </a>

            </div>

        </nav>
    </div>
     
    </>
  )
}