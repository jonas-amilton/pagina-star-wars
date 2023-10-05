import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import TitlePage from "../../components/TitlePage";

export const Planets: React.FC = () => {
  return (
    <Grid container>
      <TitlePage title="Planetas de Star Wars" />

      <Grid
        style={{ marginBottom: "2em" }}
        justifyContent={"center"}
        container
        spacing={2}
      >
        <Grid item xs={6}>
          <Button
            fullWidth
            style={{ backgroundColor: "#000", color: "#fff" }}
            variant="contained"
          >
            Página anterior
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            style={{ backgroundColor: "#000", color: "#fff" }}
            variant="contained"
          >
            Próxima página
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
