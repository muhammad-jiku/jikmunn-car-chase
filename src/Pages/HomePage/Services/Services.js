import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import { Container, Row, Spinner } from 'react-bootstrap';

function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    fetch('carServices.json')
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setServices(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner
          animation="border"
          variant="danger"
          role="status"
          className="mx-auto"
        ></Spinner>
      ) : (
        <Container fluid>
          <h2>Available Services:</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {services.map((carService) => (
              <Service key={carService?._id} carService={carService} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}

export default Services;
