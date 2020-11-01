import React, { Component, useState, useEffect } from 'react';
import { Dropdown, DropdownButton, Button, Row, Col } from "react-bootstrap";
import api from "../utils/API"
import axios from "axios"


const JoinHang = (props) => {


  const [data, setData] = useState()

  useEffect(() => {
    axios.get("api/hang").then((response) => {

      setData(response)
    })

  }, [])



  console.log(data)

  return (
    <div className="wrapper" >
      <div className="form-wrapper">
        <h1 className="joinTitle">Join Hang</h1>
        <Row className="hangRow">
          <Col xs={2} md={4} className="dropdown">

            <DropdownButton
              id="dropdown-basic-button"
              title=" Hang { }">


            </DropdownButton>
          </Col>
          <Col xs={2} md={4} ></Col>
          <Col xs={2} md={4} className="join">
            <Button variant="info">Join Hang</Button>{' '}
          </Col>
        </Row>

      </div>
    </div>

  );
};

export default JoinHang
