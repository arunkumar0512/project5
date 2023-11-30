import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import {BiCheckbox} from 'react-icons/bi'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Mainpage = () => {
    return (
        <div>
            <div>
                <input className="form-control sb "type="search"  placeholder="search"/>
            </div>
            <Container >
        <Row>
          <Col className="sales">Sales Information</Col>
        </Row>
        <Row>
          <Col className="salesInfo">
            Customer
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Enter Customer Name"
              />
            </InputGroup>
          </Col>
          <Col className="salesInfo">
            Invoice ID
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Enter Invoice ID"
              />
            </InputGroup>
          </Col>
          <Col className="salesInfo">
            Start Date
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Start Date"
              />
            </InputGroup>
          </Col>
          <Col className="salesInfo">
            End Date
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="End Date"
              />
            </InputGroup>
          </Col>
        </Row>
        </Container>
            <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th><BiCheckbox/></th>
          <th>Invoice id</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Payable Amount</th>
          <th>Paid Amount</th>
          <th>Due</th>
        </tr>
        
      </thead>
      <tbody>
      <tr>
          <td><BiCheckbox/></td>
          <td style={{color: 'blue' }}>#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
          <td><BiCheckbox/></td>
          <td style={{color: 'blue' }}>#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
          <td><BiCheckbox/></td>
          <td style={{color: 'blue' }}>#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
          <td><BiCheckbox/></td>
          <td style={{color: 'blue' }}>#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
          <td><BiCheckbox/></td>
          <td style={{color: 'blue' }}>#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
          <td><BiCheckbox/></td>
          <td style={{color: 'blue' }}>#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
          <td><BiCheckbox/></td>
          <td style={{color: 'blue' }}>#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
          <td><BiCheckbox/></td>
          <td style={{color: 'blue' }}>#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
          <td><BiCheckbox/></td>
          <td style={{color: 'blue' }}>#AHGA68</td>
          <td>23/09/2022</td>
          <td>Jacob marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        
        
      </tbody>
    </Table>
            </div>
        </div>
    );
};

export default Mainpage;