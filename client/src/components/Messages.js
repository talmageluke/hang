import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Messages.css";

export default function Messages() {
  return (
    <div>
      <Card className="messageBoard">
        <Card.Header as="h5">(Current Opened Conversation) ~ (Picture)(Profile Name)</Card.Header>
        <Card.Body>
          <Card.Text>
            <div className="messageSections">
              <div className="converstions">
                <ListGroup><h4>Converstions</h4>
                    <ListGroup.Item action>(Picture)(Profile Name)</ListGroup.Item>
                    <ListGroup.Item action>(Picture)(Profile Name)</ListGroup.Item>
                    <ListGroup.Item action>(Picture)(Profile Name)</ListGroup.Item>
                    <ListGroup.Item action>(Picture)(Profile Name)</ListGroup.Item>
                    <ListGroup.Item action>(Picture)(Profile Name)</ListGroup.Item>
                </ListGroup>
              </div>
              <div className="chatWindow">
                  {
                      [{from: 'user', msg: 'Hello'}].map((chat, i ) => (
                          <div className='messageBubbles' key={i}>
                            <Card className='messageBubbles'>
                                <h6 varient='p'>{chat.msg}</h6>
                            </Card>
                          </div>
                      ))
                  }
                  <div className='chatBox'>
                      
                  </div>
              </div>
            </div>
            <div className="messageSections"></div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
