import React from 'react';
import { useParams } from 'react-router-dom';

function ServiceDetail() {
  const { serviceId } = useParams();
  return <div>ServiceDetail{console.log(serviceId)}</div>;
}

export default ServiceDetail;
