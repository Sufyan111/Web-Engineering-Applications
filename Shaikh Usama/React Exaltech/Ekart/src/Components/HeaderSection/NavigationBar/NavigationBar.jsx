import * as React from "react";
import FactoryIcon from "@mui/icons-material/Factory";

import { Typography, AppBar, Toolbar, Container } from "@mui/material";

function NavigationBar() {
  const navBarData = ["Products", "Pricing", "About", "Services"];
  return (
    <AppBar position="fixed" style={{ backgroundColor: "teal" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FactoryIcon />
          <Typography variant="h6" component="div">
            -Elnas Industries
          </Typography>

          {navBarData.map((item) => {
            return (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {item}
              </Typography>
            );
          })}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;
