import React from 'react';
import { Stack, Typography } from '@mui/material';

export const CollectionDetails = () => {
  return (
    <Stack alignItems="center" sx={{ p: 4, pt: 2, my: 4, mx: 3, border: '1px dashed #656565', borderRadius: 8, boxShadow: 'rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.04) 0px 5px 22px' }}>
      <h3 style={{ marginTop: 0, fontSize: 21 }}>Collection Details</h3>

      <Stack alignItems="center" gap={4} sx={{ flexDirection: { xs: 'column', md: "row" } }}>
        <img src="https://tukuz.com/wp-content/uploads/2020/09/clicks-south-africa-logo-vector.png" alt="collection-logo" style={{ borderRadius: 12, padding: 8, width: 140, boxShadow: 'rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.10) 0px 5px 22px', backgroundColor: '#FFF' }} />

        <Stack flexDirection="row" flexWrap="wrap" columnGap={10} rowGap={2}>
          <Stack>
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Collection Point:</h3>
            <Typography sx={{ color: '#656565', lineHeight: '21px' }}>
              Clicks - New Kroonstad <br />
              pup993 <br />
              Checkers Shopping Centre <br />
              Cnr Van Zyl Street And North Street <br />
              Kroonstad <br />
            </Typography>
          </Stack>
          
          <Stack>
            <h3 style={{ marginTop: 0, marginBottom: 8 }}> Open Times:</h3>
            <Typography sx={{ color: '#656565', lineHeight: '21px' }}>
              Mon-Fri: 8:30am-5:30pm <br />
              Sat: 8am-2pm <br />
              Sun: 9am-1pm
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}