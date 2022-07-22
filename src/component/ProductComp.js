import {
  CardActions,
  CardMedia,
  Grid,
  Card,
  Box,
  CardContent,
  Typography,
} from "@mui/material";
import { FadeLoader } from "react-spinners";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { NavLink } from "react-router-dom";

const ProductComp = () => {
  const [loading, setLoading] = useState(true);
  const products = useSelector((state) => state.productReducer.products);
  console.log(products);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Grid container spacing={3} style={{ padding: "30px" }}>
        <>
          {loading ? (
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flex:1}}><FadeLoader size={150} loading={loading}/></Box>
          ) : (
            <>
              {products.map((product) => (
                <Grid item md={2} sm={12} xs={12} key={product.id}>
                  <NavLink
                    to={`/details/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card style={{ height: "450px" }}>
                      <CardActions>
                        <Box
                          sx={{
                            margin: "auto",
                            width: "200px",
                            height: "100px%",
                            padding: "20px",
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={product.image}
                            sx={{ height: "80%", width: "80%", margin: "auto" }}
                          />
                        </Box>
                      </CardActions>
                      <CardContent>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ color: "gray", textAlign: "left" }}
                          >
                            {product.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "600",
                            mt: "10px",
                            color: "#595959",
                          }}
                        >
                          {product.category}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "18px" }}>
                          {" "}
                          ₹{product.price}
                        </Typography>
                      </CardContent>
                    </Card>
                  </NavLink>
                </Grid>
              ))}
            </>
          )}
        </>
      </Grid>
    </>
  );
};

export default ProductComp;
