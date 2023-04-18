import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import TitlePage from '../../components/TitlePage';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllFilms, selectAll } from '../../store/modules/filmsSlice';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const filmsRedux = useAppSelector(selectAll);

  useEffect(() => {
    dispatch(getAllFilms());
  }, []);

  return (
    <Grid container>
      <Grid item>
        <TitlePage title="Filmes" />
        {filmsRedux.map((item) => (
          <React.Fragment key={item.title}>
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="h4">{item.episode_id}</Typography>
            <Typography variant="body2">{item.opening_crawl}</Typography>
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};
