import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-warning">
    <Container>
      <Navbar.Brand  className='text-light fw-bold fs-5'>
      <Link to={"/"} style={{textDecoration:'none'}}>
      <h4 className='header1'> <i className='fa-solid fa-music'> &nbsp; </i> MEDIA PLAYER</h4>
     
       
     </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header