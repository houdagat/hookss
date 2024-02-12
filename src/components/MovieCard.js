import React from 'react'
import {Card,ListGroup} from 'react-bootstrap'
import ReactStars from 'react-stars'

function MovieCard({movie}) {
  const { name, description, image, rating,date } = movie;

  return (
    <div>


<Card style={{ width: '30rem' }}>
      <Card.Img width={100} height={300} variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>

      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{date}</ListGroup.Item>
        <ListGroup.Item>{rating}</ListGroup.Item>
        <ListGroup.Item>{description}</ListGroup.Item>
      </ListGroup>

      <ReactStars 
    count={5}
    seize={15}
    activeColor='#ffd700'
    value={movie.rating}
    edit={false}/>
    </Card>




    </div>
  )
}

export default MovieCard