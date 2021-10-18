import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Food = () => {
    const {foodId} = useParams();
    const[foods, setFoods] = useState([])
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFoods(data.meals[0]))
    },[])
    return (
        <div>
            <h6>Food id: {foodId} </h6>
            <div className=" container">

            <Card className="mx-auto" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={foods.strMealThumb} />
            <Card.Body>
                <Card.Title> {foods.strMeal} </Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Link to='/restaurant'><Button variant="primary">Go To Restaurant</Button></Link>
                
            </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default Food;