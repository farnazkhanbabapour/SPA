import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Cource(props) {
  return (
    <div>
        <Link to={`/cource/${props.id}`} style={{textDecoration:"none"}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                  <Card.Title>{props.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Got Course</Button>
                </Card.Body>
            </Card>
        </Link>
        
    </div>
  )
}
