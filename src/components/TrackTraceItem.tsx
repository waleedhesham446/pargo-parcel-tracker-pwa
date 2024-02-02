import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';

export const TrackTraceItem = ({ title, description, image }: { title: string, description: string, image: string }) => {

  return (
    <Grid item xs={12} sm={4}>
      <Stack alignItems="center" gap={2}>
        <img src={image} alt="Trace Image" style={{ width: 120, height: 120 }} />
        <h3 style={{ margin: 0 }}>{title}</h3>
        <Typography sx={{ color: '#898989', textAlign: 'center' }}>{description}</Typography>
      </Stack>
    </Grid>
  );
}