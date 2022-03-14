import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";
import Box from "@material-ui/core/Box";
import pageNotFound from "../../images/pageNotFound.png";
import Navbar from "../Element/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Card
          sx={{
            maxWidth: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={pageNotFound}
              alt="Not-Found"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Page Not Found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sorry, the page your are trying to access is not found.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
};

export default NotFound;
