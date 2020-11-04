// import React, { Component, useState, useEffect } from "react";
// import { Button, Card } from "react-bootstrap";
// import api from "../utils/API";
// import axios from "axios";

// const JoinHang = (props) => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     axios.get("api/hang").then((response) => {
//       setData(response);
//     });
//   }, []);
//   console.log(data);

//   const renderCard = (card, index) => {
//     return (
//       <Card className="text-center" key={index}>
//         <Card.Header>{data.User}</Card.Header>
//         <Card.Body>
//           <Card.Title>{data.Header}</Card.Title>
//           <Card.Text>{data.Body}</Card.Text>
//           <Button variant="primary">Join Hang</Button>
//         </Card.Body>
//         <Card.Footer className="text-muted">{data.Date}</Card.Footer>
//       </Card>
//     );
//   };
//   return <div>{data.map(renderCard)}</div>;
// };

// export default JoinHang;
