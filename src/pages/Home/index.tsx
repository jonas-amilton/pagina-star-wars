import React, { useEffect, useState } from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import TitlePage from "../../components/TitlePage";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllFilms, selectAll } from "../../store/modules/filmsSlice";
import TextField from "@mui/material/TextField";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const filmsRedux = useAppSelector(selectAll);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(getAllFilms());
  }, []);

  const filteredFilms = filmsRedux.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.episode_id.toString().includes(searchText)
  );

  return (
    <Grid container spacing={2}>
      <TitlePage title="Filmes de Star Wars em ordem cronológica" />
      <Grid item xs={12}>
        <TextField
          label="Buscar"
          fullWidth
          margin="normal"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Grid>
      {filteredFilms.length > 0 ? (
        filteredFilms.map((item) => (
          <Grid item key={item.title} xs={12} sm={6} md={4} lg={3}>
            <Card
              style={{
                margin: ".4em",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <CardContent>
                <Typography variant="body1">
                  Episódio {item.episode_id}
                </Typography>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body2">{item.opening_crawl}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="h6">Filme não encontrado.</Typography>
        </Grid>
      )}
    </Grid>
  );
};
