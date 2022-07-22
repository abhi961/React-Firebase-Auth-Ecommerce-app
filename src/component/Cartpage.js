import {
  Typography,
  Box,
  Card,
  CardMedia,
  Grid,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeCart } from "../redux/actions/action";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

const Cartpage = () => {
  const [qty, setQty] = useState(1);
    const dispatch = useDispatch()
  const getcart = useSelector((state) => state.cartReducer.carts);
  console.log(getcart);
  useEffect(() => {
  }, []);

  const setQtyHandler = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      setQty(1);
    }
  };

  const removeHandler = (id) => {
    dispatch(removeCart(id))
  }

  return (
    <>
      <Container>
        <Typography>ShoppingCart</Typography>
        {getcart.length > 0 ? (
          <>
            <Grid>
              {getcart.map((product) => (
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb:'20px'
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    sx={{ width: "100px", padding: "30px" }}
                  />
                  <CardContent sx={{width:'200px'}}>
                    <Typography>{product.title}</Typography>
                  </CardContent>
                  <Box sx={{ ml: "10px" }}>
                    <Button
                      variant="contained"
                      elevation="none"
                      sx={{  width: "30px", background: "#000" }}
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
                      sx={{  width: "0px", background: "#000" }}
                      onClick={() => setQty(qty + 1)}
                    >
                      +
                    </Button>
                  </Box>
                  <CardContent>
                    <Typography>{product.price}</Typography>
                  </CardContent>
                  <Stack>
                    <IconButton onClick={()=> removeHandler(product.id)}>
                      <DeleteIcon/>
                    </IconButton>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </>
        ) : (
          <>
            <Typography>Your cart is empty</Typography>
          </>
        )}
      </Container>
    </>
  );
};

export default Cartpage;
