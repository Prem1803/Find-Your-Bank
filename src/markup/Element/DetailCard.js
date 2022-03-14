import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";
import bank from "../../images/bank.jpg";
const DetailCard = ({ details }) => {
  return (
    <Card
      sx={{
        maxWidth: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "120px",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="200" image={bank} alt="Bank" />
        <CardContent>
          {Object.keys(details).map((field, index) => {
            const value = details[field];
            return (
              <Typography
                key={index}
                gutterBottom
                variant="body2"
                component="div"
              >
                {field.replace("_", " ").toUpperCase()} : {value}
              </Typography>
            );
          })}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DetailCard;
