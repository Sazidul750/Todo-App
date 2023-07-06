import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Details(props) {
    const {title,description,thumbnail,price,index}=props
  return (
    <div  >
       
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body key={index}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Button variant="primary">${price}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Details