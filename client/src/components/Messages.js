import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import "../components/Messages.css";
const Page = styled.div`
  .message_page {
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    background-color: #46516e;
    flex-direction: column;
  }
`;
const Container = styled.div`
  .message_container {
    display: flex;
    flex-direction: column;
    height: 500px;
    max-height: 500px;
    overflow: auto;
    width: 400px;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding-bottom: 10px;
    margin-top: 25px;
  }
`;
const TextArea = styled.textarea`
  .message_textarea {
    width: 98%;
    height: 100px;
    border-radius: 10px;
    margin-top: 10px;
    padding-left: 10px;
    padding-top: 10px;
    font-size: 17px;
    background-color: transparent;
    border: 1px solid lightgray;
    outline: none;
    color: lightgray;
    letter-spacing: 1px;
    line-height: 20px;
    ::placeholder {
      color: lightgray;
    }
  }
`;
const Button = styled.button`
  .send_btn {
    background-color: pink;
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 10px;
    color: #46516e;
    font-size: 17px;
  }
`;
const Form = styled.form`
  .message_form {
    width: 400px;
  }
`;
const MyRow = styled.div`
  .my_row {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
`;
const MyMessage = styled.div`
  .my_message {
    width: 45%;
    background-color: pink;
    color: #46516e;
    padding: 10px;
    margin-right: 5px;
    text-align: center;
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;
  }
`;
const PartnerRow = styled(MyRow)`
  .partner_row {
    justify-content: flex-start;
  }
`;
const PartnerMessage = styled.div`
  .partner_message {
    width: 45%;
    background-color: transparent;
    color: lightgray;
    border: 1px solid lightgray;
    padding: 10px;
    margin-left: 5px;
    text-align: center;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
  }
`;
const Messages = () => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = io.connect("/");
    socketRef.current.on("your id", (id) => {
      setYourID(id);
    });
    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    });
  }, []);
  function receivedMessage(message) {
    setMessages((oldMsgs) => [...oldMsgs, message]);
  }
  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }
  function handleChange(e) {
    setMessage(e.target.value);
  }
  return (
    <Page className="message_page">
      <div className="title_header">
        <h2>Messages</h2>
      </div>
      <Container className="message_container">
        {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <MyRow className="my_row" key={index}>
                <MyMessage className="my_name">{message.body}</MyMessage>
              </MyRow>
            );
          }
          return (
            <PartnerRow className="partner_row" key={index}>
              <PartnerMessage className="partner_message">
                {message.body}
              </PartnerMessage>
            </PartnerRow>
          );
        })}
      </Container>
      <Form className="message_form" onSubmit={sendMessage}>
        <TextArea
          className="message_textarea"
          value={message}
          onChange={handleChange}
          placeholder="Say something..."
        />
        <Button className="send_btn">Send</Button>
      </Form>
    </Page>
  );
};
export default Messages;