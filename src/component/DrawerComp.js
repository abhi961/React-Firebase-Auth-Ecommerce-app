import {
  Drawer,
  IconButton,
  List,
  Button,
  ListItemButton,
  ListItemText,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from "react-redux/es/exports";

const DrawerComp = () => {
  const getcart = useSelector((state)=> state.cartReducer.carts)
  const getwishlist = useSelector((state)=> state.wishlistreducer.wishlistpro)
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        sx={{ width: "800px" }}
      >
        <List sx={{ width: "300px" }}>
          <ListItemButton LinkComponent={Link} to="/home">
            <ListItemText sx={{ fontSize: "18px", fontWeight: "bold" }}>
              Home
            </ListItemText>
          </ListItemButton>
          <ListItemButton LinkComponent={Link} to="/product">
            <ListItemText>Product</ListItemText>
          </ListItemButton>
          <ListItemButton LinkComponent={Link} to="/contact">
            <ListItemText>Contact</ListItemText>
          </ListItemButton>
        </List>
        <IconButton
          color="inherit"
          LinkComponent={Link}
          to="/cart"
          sx={{ flexDirection: "row", justifyContent: "flex-start" }}
        >
          <Badge badgeContent={getcart.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          LinkComponent={Link}
          to="/cart"
          sx={{ flexDirection: "row", justifyContent: "flex-start" }}
        >
          <Badge badgeContent={getwishlist.length} color="primary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <Button
          variant="contained"
          sx={{ margin: "10px" }}
          LinkComponent={Link}
          to="/login"
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{ margin: "10px" }}
          // LinkComponent={Link}
          // to="/login"
        >
          LogOut
        </Button>
        <Button
          variant="contained"
          sx={{ margin: "10px" }}
          LinkComponent={Link}
          to="/signup"
        >
          {" "}
          Signup
        </Button>
      </Drawer>
      <IconButton onClick={() => setopenDrawer(!openDrawer)} color="inherit">
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
