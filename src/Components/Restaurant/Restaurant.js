import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Foods from '../Foods/Foods';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const[foods,setFoods] = useState([]);
    const handleClick = e =>{
        const inputText = e.target.value;
        setSearchText(inputText);
    }
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFoods(data.meals))
    },[searchText])
    return (
        <div>
            <h2>Food found: {foods.length} !</h2>
            <div className="">
                <Container fluid="md">
                    <Row md={1}>
                        <Col>
                        <InputGroup className="mb-3">
                        <FormControl onChange={handleClick}
                        placeholder="Search Food Name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="success" id="button-addon2">
                        Search
                        </Button>{' '}
                    </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="">

            <Container>

            <Row lg={3} className="g-6 justify-content-md-center">
                {
                    foods.map(food=><Foods
                    key = {food.idMeal}
                        food = {food}
                    ></Foods>)
                }
            </Row>
            </Container>
                
            </div>
        </div>
    );
};

export default Restaurant;