import React from 'react';
import { Button, Card } from "react-bootstrap";

import axios from 'axios';

function JoinHang(props) {
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

  return (
    <ul>
      { this.state.hangs.map(hang =>
        <Card className="text-center" key={hang.id}>
          <Card.Header>{hang.User}</Card.Header>
          <Card.Body>
            <Card.Title>{hang.event}</Card.Title>
            <Card.Text>Skill level: {hang.skill}
            </Card.Text>
            <Card.Text>Location: {hang.location} ‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ Time: {hang.time}</Card.Text>
            <Card.Text>Details: {hang.details}</Card.Text>
            <Card.Text> {hang.eventDate}</Card.Text>
            <Button variant="primary">Join Hang</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Created on 5{hang.date}</Card.Footer>
        </Card>

      )}
    </ul>
  )
}
