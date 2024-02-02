import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { TrackTraceItem } from './TrackTraceItem';

export const TrackTrace = () => {

  return (
    <Stack component='section' alignItems="center" sx={{ backgroundColor: '#f0f0f0', p: 3, mt: 5, width: '100%', boxSizing: 'border-box', boxShadow: 'inset 0 5px 5px -4px rgba(0, 0, 0, 0.3)' }}>
      <h2 style={{ marginBottom: 8 }}>What is Track & Trace?</h2>
      <Typography sx={{ color: '#898989', textAlign: 'center', px: 2 }}>Check where your parcel is at all times. With Track & Trace you can monitor your parcel's activity 24/7.</Typography>

      <Grid container spacing={{ xs: 2, md: 4 }} px={{ xs: 3, md: 5 }}>
        <TrackTraceItem image='https://eg.pargo.com/wp-content/themes/pargo-egypt/assets/img/icons/TrackParcel.svg' title='Tracking Number' description='Find the waybill number on your parcel - this is your tracking number.' />
        <TrackTraceItem image='https://eg.pargo.com/wp-content/themes/pargo-egypt/assets/img/icons/TrackingPin.svg' title='Enter Tracking No.' description='Use your tracking number in the panel at the top of this page.' />
        <TrackTraceItem image='https://eg.pargo.com/wp-content/themes/pargo-egypt/assets/img/icons/TrackLocation.svg' title='Location' description='Check where your parcel is right now.' />
      </Grid>
    </Stack>
  );
}