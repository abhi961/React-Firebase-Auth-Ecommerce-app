import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductComp from "./ProductComp";
import { setproducts } from "../redux/actions/action";


const Productlisting = () => {

  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  console.log(products);
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    dispatch(setproducts(data));
  };
  console.log("Products :", products);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
   <>
   <ProductComp/>
  </>
  
  );
};

export default Productlisting;
