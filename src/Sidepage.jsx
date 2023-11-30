import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {BsFillGridFill} from 'react-icons/bs'
import {BiNotepad,BiSolidMessageAltCheck,BiSolidCalendarCheck,BiSolidGridAlt} from 'react-icons/bi'
import {AiOutlineMedicineBox,AiOutlineSetting } from 'react-icons/ai'
import {MdPayments} from 'react-icons/md'
// import "./page.css"

const Sidepage = () => {
    return (
        <div>
           
              <h1>GUVI Sales</h1>
           
           
            {/* //https://react-bootstrap.github.io/docs/components/navs */}
            
            <Container className='nav'>
           <Nav defaultActiveKey="/home" className="flex-column">
           <Nav.Link href="/home"> <BsFillGridFill/> Dashboard</Nav.Link> 
           <Nav.Link eventKey="link-1"><BiNotepad/>Lab test</Nav.Link>
          <Nav.Link eventKey="link-2">Appointment</Nav.Link>
          <Nav.Link eventKey="link-2"><AiOutlineMedicineBox/>Medicine Order</Nav.Link>
          <Nav.Link eventKey="link-1"><BiSolidMessageAltCheck/>Message</Nav.Link>
          <Nav.Link eventKey="link-2"><MdPayments/>Payment</Nav.Link>
          <Nav.Link eventKey="/home"><AiOutlineSetting/>Setting</Nav.Link>
           </Nav>
    </Container>
           
        </div>
    );
};

export default Sidepage;