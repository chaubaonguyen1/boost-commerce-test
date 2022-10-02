import * as React from "react";
import { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {ICardItem} from "./ICardItems";
import { Container } from "@mui/material";

export const CardItems: FunctionComponent<ICardItem> = (props) => {
  const { image, brand, price, title, id, url } = props;

  return (
    <Card className="product-wrap" sx={{ display: "flex", width: "100%", boxShadow: 'none' }}>
      <CardMedia
         className="product-img"
        component="img"
        sx={{ width: 70, height: 90, padding: 1 }}
        image={image ? image : require("../static/imgs/noimg.png")}
        alt={title ? title : ""}
      />
      <Box className="product-content" sx={{ display: "flex", flexDirection: "column", pl: 1, pb: 1 }}>
        <Container maxWidth="sm" style={{ flex: "1 0 auto", padding: '10px' }}>
          <Typography className="product-title" component="div" variant="h6">
            {title ? title : "No title"}
          </Typography>
          <Typography
          className="product-brand"
            variant={"inherit"}
            color="text.secondary"
            component="div"
          >
            {brand ? brand : ""}
          </Typography>
          <Typography
          className="product-price"
            variant={"inherit"}
            color="text.secondary"
            component="div"
          >
            {price ? price : ""}
          </Typography>

        </Container>
      </Box>
    </Card>
  );
}
