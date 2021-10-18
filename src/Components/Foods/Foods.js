import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Foods = (props) => {
    
    const{strMeal, strMealThumb, idMeal} = props.food;
    const url = `foods/${idMeal}`;
    return (
        <div>
            <Col className=' mb-5'>
                <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title> {strMeal} </Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link to={url} ><Button className='btn-danger'>View Details</Button></Link>
                    
                </Card.Body>
                </Card>
            </Col>            
        </div>
    );
};

export default Foods;