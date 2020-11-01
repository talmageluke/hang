import React, { Component } from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import { Card } from "react-bootstrap";
import "./UserProfile.css";

export default class UserProfile extends Component {
  render() {
    return (
      <div>
        
        <div className="profileMargins">
          <div>
            <img className="profilePic" alt="" />
          </div>
          <div>
            <h4>(Username)</h4>
            <div className="ageBio">
              <h5>Age: </h5>
            </div>
            <div className="genderBio">
              <h5>Gender: </h5>
            </div>
            <div className="locationBio">
              <h5>Location: (state/city)</h5>
            </div>
            <div className="hangsNumber">
              <h5>#Created</h5>
              <h5>#Attended</h5>
            </div>
          </div>
        </div>
        <div className='borderLine'></div>
        <h4 className="currentHangs">Current Hangs</h4>
        <div className="currentActivities">
          <Card>
            <Card.Body>Current Hang</Card.Body>
          </Card>
        </div>
        <h4 className="pastHangs">Past Hangs</h4>
        <div className="pastActivities">
          <Card>
            <Card.Body>Past Hang</Card.Body>
          </Card>
        </div>
      </div>
    );
  }
};