import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

function Service({ carService }) {
  const { _id, name, price, image, description } = carService;

  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <Col>
      <Card className="customCard">
        <Image
          variant="top"
          src={image}
          alt={name}
          fluid
          rounded
          //   className="customCardImage"
          style={{ height: '280px' }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-warning">${price}</Card.Text>
          <Card.Text>
            <small className="text-muted">{description}</small>
          </Card.Text>
        </Card.Body>
        <Button
          className="btn btn-primary rounded"
          onClick={() => navigateToServiceDetail(_id)}
        >
          Book the Service
        </Button>
      </Card>
    </Col>
  );
}

export default Service;
