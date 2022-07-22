import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Category from "./Category";
import { Box, Typography } from "@mui/material";
import FadeLoader from "react-spinners/FadeLoader";
import Productlisting from "./Productlisting";


const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Box sx={{display:'flex', justifyContent:'center', flex:1, alignItems:"center"}}>
          <FadeLoader color={"#004080"} loading={loading} size={150} />
        </Box>
      ) : (
        <>
          <Box sx={{ background: "#f2f2f2" }}>
            <Carousel />
            <Category />
            <Productlisting/>
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
