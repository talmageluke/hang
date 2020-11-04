import React from 'react';
import { Button, Card } from "react-bootstrap";
import "./JoinHang.css"
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    hangs: []
  }

  componentDidMount() {
    axios.get(`api/hang`)
      .then(res => {
        const hangs = res.data;
        this.setState({ hangs });
        console.log(hangs)
      })
  }

  render() {
    return (
      <div className="wrapper">
        <ul>
        { this.state.hangs.map(hang =>
          <Card className="text-center" style={{backgroundColor: "#F2F4F3"}} key={hang.id}>
            <Card.Header style={{backgroundColor: "#264653"}}>{hang.User}</Card.Header>
            <Card.Body>
              <Card.Title className="title">{hang.event}</Card.Title>
              <Card.Text>Skill level: {hang.skill}
              </Card.Text>
              <Card.Text>Location: {hang.location} ‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ Time: {hang.time}</Card.Text>
              <Card.Text>Details: {hang.details}</Card.Text>
              <Card.Text> {hang.eventDate}</Card.Text>
              <Button variant="primary" style={{backgroundColor: "#f4a261", color: "#22333B"}}>Join Hang</Button>
            </Card.Body>
            <Card.Footer className="text-muted" style={{backgroundColor: "#264653"}}>Created on {hang.date}</Card.Footer>
          </Card>

        )}
      </ul>
      </div>
      
    )
  }
}
