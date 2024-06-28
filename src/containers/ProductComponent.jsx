import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product;
        return (

               
                <Card style={{ width: '18rem', margin: '10px' }} key={id}>
                        <Card.Img variant="top" src={image} style={{height:'300px'}}/>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                            $ {price}
                            </Card.Text>
                            <Card.Text>
                            {category}
                            </Card.Text>
                            <Link to={`/product/${id}`}>
                            <Button variant="primary">View</Button>
                            </Link>
                        </Card.Body>
                </Card>
           
           
        );
    });

    return(
        <>
        <Container fluid>
                <Row className="d-flex justify-content-center">
                {renderList}
                </Row>
        </Container>
           
        
        </>
    );
};

export default ProductComponent;