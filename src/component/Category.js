import { Button, Typography ,ButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Category = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: "bold",
            fontSize: "30px",
            mt: "20px",
          }}
        >
          Tranding Items
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "30px",
        }}
      >
        {/* <Button
          variant="outlined"
          sx={{ margin: "10px", textTransform: "capitalize", padding: "8px" }}
        >
          All
        </Button> */}
       <ButtonGroup variant="contained" size="small">
        {/* <Button sx={{ textTransform: "capitalize"}}>All</Button> */}
       <Button
          
          sx={{ textTransform: "capitalize"}}
        >
          Men's
        </Button>
        <Button
          
          sx={{ textTransform: "capitalize" }}
        >
          Jewelery
        </Button>
        <Button
          
          sx={{  textTransform: "capitalize"}}
        >
          Electronic's
        </Button>
        <Button
          
          sx={{textTransform: "capitalize" }}
        >
          Women's
        </Button>
       </ButtonGroup>
      </Box>
    </>
  );
};

export default Category;
