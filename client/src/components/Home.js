import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import "./Home.css";
import logo from "./logowhite.png";
import mountainimage from "./mountain.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="wrapper"
        style={{
          backgroundImage: 'url(' + mountainimage + ')'
        }}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Row>
          <Col>
            <Link to="/createHang">
              <Card
                className="createHangBtn"
                style={{ width: "16rem", height: "16rem" }}
              >
                <Card.Body>
                  <Card.Text className="cardText">CREATE HANG</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/joinHang">
              <Card
                className="joinHangBtn"
                style={{ width: "16rem", height: "16rem" }}
              >
                <Card.Body>
                  <Card.Text className="cardText">
                    JOIN
                    <br />
                    HANG
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
