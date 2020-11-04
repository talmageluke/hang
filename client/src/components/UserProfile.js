import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import "./UserProfile.css"

export const Profile = () => {
  const { user } = useAuth0();
  return (
    <div className="wrapper">
      <Container className="mb-5 userProf">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2 className="userName">{user.nickname}</h2>
          <p className="userName lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <div className="borderLine"></div>
      <h4 className="currentHangs">Current Hangs</h4>
      <div className="currentActivities">
        <Card>
          <Card.Body>Current Hangs</Card.Body>
        </Card>
      </div>
      <h4 className="pastHangs">Past Hangs</h4>
      <div className="pastActivities">
        <Card>
          <Card.Body>Past Hangs</Card.Body>
        </Card>
      </div>
    </Container>
    </div>
  );
};

export default Profile;
