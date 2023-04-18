import React, { useEffect } from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import TitlePage from "../../components/TitlePage";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllPeoples, selectAll } from "../../store/modules/peopleSlice";

export const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const peopleRedux = useAppSelector(selectAll);

  useEffect(() => {
    dispatch(getAllPeoples());
  }, []);

  return (
    <Grid container>
      <TitlePage title="Personages de Star Wars" />
      {peopleRedux.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.name}>
          <Card
            style={{
              margin: ".4em",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="body1">
                Ano de nascimento: {item.birth_year}
              </Typography>
              <Typography variant="body1">
                Cor dos olhos: {item.eye_color}
              </Typography>
              <Typography variant="body1">Genero: {item.gender}</Typography>
              <Typography variant="body1">
                Cor do cabelo: {item.hair_color}
              </Typography>
              <Typography variant="body1">Altura: {item.height}</Typography>
              <Typography variant="body1">Peso: {item.mass}</Typography>
              <Typography variant="body1">
                Cor da pele: {item.skin_color}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
