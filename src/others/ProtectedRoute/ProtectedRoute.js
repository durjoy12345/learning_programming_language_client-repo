import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ProtectedRoute = () => {
  const user = useLoaderData();
  const { title, details } = user;

  console.log(user);

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title className="text-center fw-bold fs-4">{title}</Card.Title>
          <Card.Text className="fs-5 fw-light">{details}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProtectedRoute;
