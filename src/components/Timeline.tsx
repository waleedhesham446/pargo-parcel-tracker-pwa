import React from 'react';
import { Stack, Stepper, Step, StepLabel, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import { StepIconProps } from '@mui/material/StepIcon';

import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import WhereToVoteRoundedIcon from '@mui/icons-material/WhereToVoteRounded';

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  border: '2px solid',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage: 'linear-gradient( 136deg, #fff200 0%, #fff200 50%, #e6d200 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.45)',
    borderColor: theme.palette.success.light
  }),
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient( 136deg, #fff200 0%, #fff200 50%, #e6d200 100%)',
    borderColor: theme.palette.success.light
  }),
}));

const icons: { [index: string]: React.ReactElement } = {
  1: <AutorenewRoundedIcon />,
  2: <Inventory2RoundedIcon />,
  3: <RouteRoundedIcon />,
  4: <HubRoundedIcon />,
  5: <LocalShippingRoundedIcon />,
  6: <WhereToVoteRoundedIcon />
}

function StepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  {
    title: 'Parcel Pending',
    description: 'Parcel is not yet ready to start',
    date: '28/01/2024',
    time: '11:33 pm'
  },
  {
    title: 'Parcel is Being Prepared',
    description: 'Your parcel is being prepared by Essentially Natural.',
    date: '29/01/2024',
    time: '12:40 am'
  },
  {
    title: 'Parcel Collected by Courier',
    description: 'Your parcel has been collected by the courier and is en route to the courier HUB.',
    date: '29/01/2024',
    time: '02:58 pm'
  },
  {
    title: 'Parcel at Courier Hub',
    description: 'Your parcel has arrived at the courier HUB.',
    date: '29/01/2024',
    time: '05:48 pm'
  },
  {
    title: 'Parcel Out for Delivery',
    description: 'Your parcel is out for delivery.',
    date: '01/02/2024',
    time: '07:35 am'
  },
  {
    title: 'Parcel Arrived at Pickup Point',
    description: 'Your parcel is ready to be collected.',
    date: '01/02/2024',
    time: '10:56 am'
  },
]

export const Timeline = () => {
  return (
    <Stack sx={{ p: { xs: 2, sm: 3, md: 4 }, my: { xs: 0, md: 2 }, width: 755, maxWidth: 'calc(100% - 32px)', boxSizing: 'border-box', backgroundColor: 'rgb(245, 245, 245)', borderRadius: 2 }}>
      <h3 style={{ marginTop: 0, fontSize: 21 }}>Parcel Timeline</h3>
      
      <Stepper activeStep={5} orientation="vertical" sx={{ '& .MuiStepLabel-iconContainer svg': { color: '#656565' }, '& .MuiStepConnector-root': { marginInlineStart: 3 } }}>
        {steps.map((step, index: number) => (
          <Step key={index}>
            <StepLabel optional={step.description} StepIconComponent={StepIcon}>
              <h4 style={{ margin: 0 }}>{step.title}</h4>
              <h5 style={{ display: 'inline-block', margin: 0 }}>{step.date} {step.time}</h5>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}