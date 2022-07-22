import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import {
  selectedProduct,
  Removeselectedproduct,
  addtocardProduct,
  addtowishlistproduct,
} from "../redux/actions/action";

const ProductDetails = () => {
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const { productId } = useParams();
  console.log(productId);
  const product = useSelector((state) => state.selectedproductReducer);
  const dispatch = useDispatch();
  console.log(product);
  useEffect(() => {
    if (productId && productId !== "") fetchProduct();
    setLoading(false);
    return () => {
      dispatch(Removeselectedproduct());
    };
  }, [productId]);

  const fetchProduct = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const data = await response.json();
    console.log(data);
    dispatch(selectedProduct(data));
  };
  const setQtyHandler = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      setQty(1);
    }
  };

  const cartHandler = (e) => {
    dispatch(addtocardProduct(e));
  };
  const wishlistHandler = (eve) => {
    dispatch(addtowishlistproduct(eve));
  };
  return (
    <>
      <Grid container sx={{ padding: "30px" }}>
        {loading ? (
          <Box
            sx={{
              diaplay: "flex",
              alignItems:'center',
              justifyContent:"center",
              flex: 1,
            }}
          >
            <FadeLoader size={150}/>
          </Box>
        ) : (
          <>
            <Grid item xs={12} sm={12} md={6}>
              <Card elevation="none">
                <Box>
                  <CardMedia
                    component="img"
                    image={product.image}
                    sx={{ width: "60%", margin: "auto" }}
                  />
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card sx={{ mt: "60px" }} elevation="none">
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#4d4d4d",
                      fontSize: "22px",
                      lineHeight: "30px",
                      width: "550px",
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#000", fontSize: "16px", mt: "0px" }}
                  >
                    {product.category}
                    <Box component="div" style={{ mt: "20px" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "500",
                          display: "flex",
                          alignItems: "center",
                          mt: "12px",
                        }}
                      >
                        {product.rating && product.rating.rate}
                        <StarIcon
                          sx={{
                            color: "#ffdd00",
                            mt: "5px",
                            fontSize: "16px",
                            ml: "5px",
                          }}
                        />{" "}
                        <Typography sx={{ fontSize: "14px" }}>Star</Typography>
                      </Typography>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "500", mt: "10px" }}
                    >
                      &#8377; {product.price}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: "15px",
                      fontSize: "16px",
                      width: "550px",
                      textAlign: "justify",
                    }}
                  >
                    {product.description}
                  </Typography>
                </CardContent>
                <Box sx={{ ml: "10px" }}>
                  <Button
                    variant="contained"
                    elevation="none"
                    sx={{ padding: "7px", width: "30px", background: "#000" }}
                    onClick={setQtyHandler}
                  >
                    -
                  </Button>
                  <TextField
                    variant="outlined"
                    value={qty}
                    size="small"
                    sx={{ width: "50px" }}
                  ></TextField>
                  <Button
                    variant="contained"
                    elevation="none"
                    sx={{ padding: "7px", width: "30px", background: "#000" }}
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </Button>
                </Box>
                <Box sx={{ ml: "10px", mt: "30px" }}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      background: "#000",
                      padding: "5px, 20px",
                    }}
                    onClick={() => cartHandler(product)}
                  >
                    Add to cart
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      background: "#000",
                      padding: "5px, 20px",
                      ml: "20px",
                    }}
                    onClick={() => wishlistHandler(product)}
                  >
                    Add to wishlist
                  </Button>
                </Box>
              </Card>
            </Grid>
          </>
        )};
      </Grid>
    </>
  );
};
export default ProductDetails;
