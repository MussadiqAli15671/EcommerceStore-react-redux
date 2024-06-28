import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import ProductComponent from './ProductComponent';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import { fetchProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    // const fetchProducts = async() => {
    //     const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
    //         console.log("Error: ", err);
    //     });
    //     console.log("response: ", response.data);
    //     dispatch(setProducts(response.data)); // passing products to action (productAction)
    // };

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    console.log("Products: ", products);

    return(
        <div>

            <ProductComponent/>
                  
        </div>
    );
};

export default ProductListing;