import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import ecommerceIcon from '../icons/ecommerce.png'
const Header = () => {
    return(
        <>
            <Container>
                <Row>
                    <Col lg='12' className="text-center" style={{ padding:'10px'}}>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img src={ecommerceIcon} alt="icon" style={{ marginRight: '10px', height:'40px', width:'40px'}}/>
                    <h1>E-Commerce Shop</h1>
                    </div>
                    </Col>
                </Row>
            </Container>
       
            <Outlet/>
        </>
    );
};

export default Header;