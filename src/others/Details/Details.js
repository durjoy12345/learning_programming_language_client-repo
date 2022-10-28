import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaBeer, FaBook, FaEye, FaStar, FaStreetView } from 'react-icons/fa';

const Details = () => {
  const allContent = useLoaderData();
  const { _id, title, details, rating, time, lectures,  author, total_view, image_url } = allContent;
  console.log(allContent);
  return (
    <>
      <Card className="text-center">
        <Card.Header>
          <div className="d-flex fw-bold fs-4 justify-content-between align-items-center">
            <p>Total View: {total_view} <FaEye/></p>
            <p><FaStar/><FaStar/><FaStar/> {rating.number}</p>
            <p>Total Leacture: { lectures} <FaBook/></p>
          </div>

        </Card.Header>
        <Card.Img className="" variant="top" src={image_url} />
        <Card.Body>
        <Card.Title className="text-center fs-3 fw-bold">{title}</Card.Title>
        <Card.Text>
        {details}
        </Card.Text>
        <Link to={`/newsCategory/${_id}`}><Button variant="primary">Get premium access</Button></Link>
      </Card.Body>
        <Card.Footer className="text-center fw-bold fs-2">Total Time: {time} Hours</Card.Footer>
    </Card>
    </>
  );
};

export default Details;
