import React from 'react';
import { Button, Card } from "react-bootstrap";

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
              <Button variant="primary">Join Hang</Button>

            </Card.Body>
            <Card.Footer className="text-muted">{hang.date}</Card.Footer>
          </Card>

        )}
      </ul>
    )
  }
}