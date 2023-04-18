import React, { useEffect } from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import TitlePage from "../../components/TitlePage";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllFilms, selectAll } from "../../store/modules/filmsSlice";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const filmsRedux = useAppSelector(selectAll);

  useEffect(() => {
    dispatch(getAllFilms());
  }, []);

  return (
    <Grid container spacing={2}>
      <TitlePage title="Filmes de Star Wars em ordem cronológica" />
      {filmsRedux.map((item) => (
        <Grid item key={item.title} xs={12} sm={6} md={4} lg={3}>
          <Card
            style={{ margin: ".4em", backgroundColor: "black", color: "white" }}
          >
            <CardContent>
              <Typography variant="body1">
                Episodio {item.episode_id}
              </Typography>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body2">{item.opening_crawl}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
