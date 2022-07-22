import React from "react";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Tab,
  Tabs,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import DrawerComp from "./DrawerComp";
import Search from "./Search";
import FilterCategory from "./FilterCategoty";
import { useSelector } from "react-redux/es/exports";


const Header = () => {
  const getcart = useSelector((state)=> state.cartReducer.carts)
  console.log(getcart)
  const getwishlist = useSelector((state)=> state.wishlistreducer.wishlistpro)

  const theme = useTheme();
  console.log(theme);

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [value] = useState();



  // const logoutHandler = async () => {
  //   try {
  //     await logOut();
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // };
  return (
    <>
      <AppBar sx={{ backgroundColor: "#000", }} position="fixed">
        <Toolbar>
          <IconButton color="inherit">
            <ShoppingBagIcon />
          </IconButton>
          <Typography
            variant="h5"
            sx={{ letterSpacing: "4px", textTransform: "" }}
            flexGrow="1"
          >
            e-Shop
          </Typography>

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                indicatorColor="secondary"
                // onChange={(e, val) => setvalue(val)}
              >
                <Tab label="Home" LinkComponent={Link} to="/" />
                <Tab label="Product" LinkComponent={Link} to="/product" />
                <Tab label="Contact Us" LinkComponent={Link} to="/contact" />
              </Tabs>
              <IconButton color="inherit" LinkComponent={Link} to="/cart">
                <Badge badgeContent={getcart.length} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" LinkComponent={Link} to="/cart">
                <Badge badgeContent={getwishlist.length} color="primary">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
              <Button
              
                sx={{
                  marginLeft: "25px",
                  textTransform: "capitalize",
                  letterSpacing: "1px",
                  background:'#404040'
                }}
                variant="contained"
                LinkComponent={Link}
                to="/login"
              >
                Login{" "}
              </Button>
              <Button
                sx={{
                  marginLeft: "25px",
                  textTransform: "capitalize",
                  letterSpacing: "1px",
                  background:'#404040'
                }}
                variant="contained"
                to="/login"
                // onClick={logoutHandler}
              >
                LogOut{" "}
              </Button>
              <Button
                sx={{
                  marginLeft: "22px",
                  textTransform: "capitalize",
                  letterSpacing: "1px",
                  background:'#404040'
                }}
                variant="contained"
                LinkComponent={Link}
                to="/signup"
              >
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "80px", padding:'30px' }}>
        <FilterCategory />
        <Search />
      </Box>
    </>
  );
};

export default Header;
