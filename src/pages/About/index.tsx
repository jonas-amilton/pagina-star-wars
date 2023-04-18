import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import TitlePage from '../../components/TitlePage';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllPeoples, selectAll } from '../../store/modules/peopleSlice';

export const About: React.FC = () => {
  const dispatch = useAppDispatch();
  const peopleRedux = useAppSelector(selectAll);

  useEffect(() => {
    dispatch(getAllPeoples());
  }, []);

  return (
    <Grid container>
      <Grid item>
        <TitlePage title="Personages" />
        {peopleRedux.map((item) => (
          <React.Fragment key={item.name}>
            <Typography variant="h4">{item.name}</Typography>
            <Typography variant="h4">{item.height}</Typography>
            <Typography variant="body2">{item.gender}</Typography>
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};
