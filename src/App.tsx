import React, { useState } from 'react';
import './App.css';
import { Divider, Stack } from '@mui/material';

import { Timeline } from './components/Timeline';
import { ParcelDetails } from './components/ParcelDetails';
import { CollectionDetails } from './components/CollectionDetails';
import { FadeLoader } from 'react-spinners';
import { WaybillInput } from './components/WaybillInput';
import { TrackTrace } from './components/TrackTrace';

function App() {
  const [status, setStatus] = useState<'HIDE' | 'LOADING' | 'SHOW'>('HIDE');

  return (
    <Stack height="100vh">
      <Stack component='header' flexDirection="row" alignItems="center" justifyContent="center" gap={2} sx={{ px: 3, py: 2, m: { xs: 2, md: 3 }, borderRadius: 3, boxShadow: 'rgba(0, 0, 0, 0.08) 0px 6px 30px 0px', backgroundColor: '#FFF' }}>
        <img src="https://eg.pargo.com/wp-content/themes/pargo-egypt/assets/img/logo.svg" alt="pargo-logo" style={{ width: 60 }} />

        <h1 style={{ margin: 0, width: 'max-content' }}>Parcel Tracking</h1>
      </Stack>

      <Stack component='main' className="hide-scrollbar" sx={{ p: { xs: 2, md: 3 }, overflowY: 'auto' }}>

        <Stack alignItems="center" sx={{ py: { xs: 1, sm: 2, md: 3 }, borderRadius: 3, boxShadow: 'rgba(0, 0, 0, 0.08) 0px 6px 30px 0px' }}>
          
          <WaybillInput setStatus={setStatus} />

          { status === 'LOADING' ?
            <Stack sx={{ p: 3, mt: 5 }}>
              <FadeLoader color="#fff200" width={10} height={20} />
            </Stack> :
            status === 'SHOW' ?
            <>
              <Divider sx={{ my: 4, width: '100%' }} />

              <h2 style={{ margin: 0, textAlign: 'center' }}>Tracking number: <strong>{'PAR2029734577'}</strong></h2>
              <h3 style={{ marginTop: 12 }}> Parcel arrived at pickup point </h3>

              <ParcelDetails />

              <CollectionDetails />

              <Timeline />
            </> :
            <></>
          }

          <TrackTrace />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
