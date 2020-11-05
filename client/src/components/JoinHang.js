import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Card } from "react-bootstrap";
import axios from 'axios';

function JoinHang(props) {
  const { user } = useAuth0();

  const [hangs, setHangs] = useState([])
  const [join, setJoin] = useState({})

  const fetchHangs = async () => {
    const response = await axios.get(`api/hang`);

    setHangs(response.data);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${user.name}`)
  }
  useEffect(() => { fetchHangs(hangs) }, [hangs]);

  return (
    <ul>
      { hangs.map(hang =>
        <Card className="text-center" key={hang.id}>
          <Card.Header>{hang.User}</Card.Header>
          <Card.Body>
            <Card.Title>{hang.event}</Card.Title>
            <Card.Text>Skill level: {hang.skill}
            </Card.Text>
            <Card.Text>Location: {hang.location} ‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ Time: {hang.time}</Card.Text>
            <Card.Text>Details: {hang.details}</Card.Text>
            <Card.Text> {hang.eventDate}</Card.Text>
            <Button onClick={handleSubmit} variant="primary" type="submit">Join Hang</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Created on 5{hang.date}</Card.Footer>
        </Card>

      )}
    </ul>
  )
}

export default JoinHang