import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import CardVideo from './CategoryScroll';

const Cards = ({...item}) => {
    return (
        <div>
            <Row className='card__container'>
            <Col xs={12} md={6} lg={4} style={{backgroundColor:"red"}}>
            <Card style={{ width: '100%' }} key={item.id}>
            
         <Card.Body>
         <Card.Title>{item.title}</Card.Title>
         <Card.Text>
        {item.text}
        </Card.Text>
   
  </Card.Body>
</Card>
                </Col>
               
            </Row>
        </div>
    )
}

export default Cards;
