import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import CardVideo from './Cardvideo';

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
                {/* <Col xs={12} md={6} lg={4} style={{backgroundColor:"green"}}>
                <Card style={{ width: '100%' }}>
                <CardVideo />
                <Card.Body>
                 <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
   
  </Card.Body>
</Card>
                </Col>
                <Col xs={12} md={6} lg={4} style={{backgroundColor:"blue"}}>
                <Card style={{ width: '100%' }}>
        <CardVideo />
         <Card.Body>
         <Card.Title>Card Title</Card.Title>
         <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
   
  </Card.Body>
</Card>
                </Col> */}
            </Row>
        </div>
    )
}

export default Cards;
