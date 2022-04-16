import React from 'react'
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';





const Filter = ({ searchMovie,sortHandler,sortByRateUp,sortByRateDown}) => {
 
  return (
    <>
     
      <Navbar expand="lg" style={{  background: '#ebc334' }}>
        <Container fluid>
         
          <Navbar.Brand href="#"><h2 style={{ color: "#222222", marginLeft: "50px", paddingTop: "10px" }}>Home Of Movies</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <button style={{background:'transparent', borderColor:'transparent' ,marginLeft:'30px'}} onClick={()=>sortHandler() }>Sort by Title </button>
          <button style={{background:'transparent', borderColor:'transparent' ,marginLeft:'30px'}} onClick={()=>sortByRateUp() }>Sort by Rate <FontAwesomeIcon icon={faArrowAltCircleUp} /> </button> 
          <button style={{background:'transparent', borderColor:'transparent' ,marginLeft:'30px'}} onClick={()=>sortByRateDown() }>Sort by Rate <FontAwesomeIcon icon={faArrowAltCircleDown} /> </button>   
          <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
       
            </Nav>
           
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search "
                onChange={searchMovie}
              />
            
       
            </Form>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
   
      )
    
      
         </>
  )
}

export default Filter