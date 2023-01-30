import { Box, Card, Grid } from "@mui/material";
import React from "react";

const PageFormat = ({ children }) => (
  <Box>
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          {children}
        </Grid>
      </Grid>
    </Card>
  </Box>
);

export default PageFormat;
