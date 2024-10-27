import { Card, CardHeader, Grid } from "@mui/material";
import React from "react";

function CardComponent({ title, children, onRemove }) {
  return (
    <Card
      sx={{
        border: "20px solid rgb(240,240,245)",
        borderRadius: "20px 18px 18px",
        boxShadow: "none",
        paddingBottom: {xs:"15%", md:"5%"},
        px:"5%",
        height: "80%",
        
      }}
    >
      <CardHeader
        title={title}
        titleTypographyProps={{
          fontSize: "24px",
          fontWeight: "600",
          marginBottom:"20px"
        }}
      />
      <Grid container>{children}</Grid>
    </Card>
  );
}

export default CardComponent;
