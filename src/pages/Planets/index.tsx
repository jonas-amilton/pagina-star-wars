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
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllPlanets, selectAll } from "../../store/modules/planetsSlice";

export const Planets: React.FC = () => {
  const dispatch = useAppDispatch();
  const planetsRedux = useAppSelector(selectAll);

  // let [currentPage, setCurrentPage] = useState(1);

  // const handlePreviousPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //     dispatch(getAllPlanets(currentPage - 1));
  //   } else if (currentPage > 9) {
  //     dispatch(getAllPlanets((currentPage = 1)));
  //   }
  // };

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  //   if (currentPage < 9) {
  //     dispatch(getAllPlanets(currentPage + 1));
  //   } else {
  //     dispatch(getAllPlanets(currentPage - 8));
  //   }
  // };

  useEffect(() => {
    dispatch(getAllPlanets());
  }, []);

  const filteredPlanets = planetsRedux.filter(
    (item) => item.name || item.diameter || item.gravity || item.population
  );

  return (
    <Grid container>
      <TitlePage title="Planetas de Star Wars" />

      {filteredPlanets.length > 0 ? (
        filteredPlanets.map((item) => (
          <Grid item key={item.name} xs={12} sm={6} md={4} lg={3}>
            <Card
              style={{
                margin: ".4em",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <CardContent>
                <Typography variant="h5">Planeta: {item.name}</Typography>
                <Typography variant="body2">Diametro: {item.diameter}</Typography>
                <Typography variant="body2">
                  Gravidade: {item.gravity}
                </Typography>
                <Typography variant="body2">
                  População: {item.population}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="h6">Planeta não encontrado.</Typography>
        </Grid>
      )}

      {/* <Grid
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
            onClick={handlePreviousPage}
          >
            Página anterior
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            style={{ backgroundColor: "#000", color: "#fff" }}
            variant="contained"
            onClick={handleNextPage}
          >
            Próxima página
          </Button>
        </Grid>
      </Grid> */}
    </Grid>
  );
};
