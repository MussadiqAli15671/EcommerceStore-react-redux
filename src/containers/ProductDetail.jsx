import {useEffect, React} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, fetchProduct } from "../redux/actions/productActions";
import { Container, Row, Col, Image, Card, CardBody, Placeholder } from "react-bootstrap";
import { removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {image, title, price, category, description} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log("productId: ", productId);

    // const fetchProductDetail = async() => {
    //     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
    //         console.log("Error: ", err);
    //     });
    //     dispatch(selectedProduct(response.data));
    // };

    useEffect (() => {
        if (productId && productId !== "") dispatch(fetchProduct(productId));
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    const isLoading = !product || Object.keys(product).length === 0;

    return(
        <>
            <Container style={{marginTop:'50px'}}>
                <Row>
                    <Col lg='6' sm='12'>
                    <Card style={{width:'100%'}}>
                        <Card.Body className="d-flex justify-content-center">
                            {isLoading ? (
                                <Placeholder animation="glow">
                                    <Placeholder xs={12} style={{ height: '300px', width: '100%' }} />
                                </Placeholder>
                            ) : (
                                <Image src={image} rounded style={{height: '300px', maxWidth: '300px', width: '100%'}}/>
                            )}
                        
                        </Card.Body>
                    </Card>
                    
                    </Col>

                    <Col lg='6' sm='12'>
                        <Card style={{width:'100%', height:'100%'}}>
                            <Card.Body style={{paddingTop:'80px'}}>
                            {isLoading ? (
                                <>
                                <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                                </Placeholder>

                                <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={4} />
                                </Placeholder>

                                <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={4} />
                                </Placeholder>

                                <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={6} /> <Placeholder xs={4} />
                                <Placeholder xs={8} /> <Placeholder xs={4} />
                                </Placeholder>
                                </>
                            ) : (
                                <>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>$ {price}</Card.Text>
                                <Card.Text>{category}</Card.Text>
                                <Card.Text>{description}</Card.Text>
                                </>
                            )}
                            
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProductDetail;