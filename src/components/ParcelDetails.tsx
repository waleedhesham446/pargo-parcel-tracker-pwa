import React from 'react';
import { Stack, Stepper, Step, StepLabel, StepConnector } from '@mui/material';

import { styled } from '@mui/material/styles';
import { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

import CallReceivedRoundedIcon from '@mui/icons-material/CallReceivedRounded';
import RoundaboutRightRoundedIcon from '@mui/icons-material/RoundaboutRightRounded';
import WhereToVoteRoundedIcon from '@mui/icons-material/WhereToVoteRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,#fff200 0%, #fff200 50%, #e6d200 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,#fff200 0%, #fff200 50%, #e6d200 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const StepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#000',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, #fff200 0%, #fff200 50%, #e6d200 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.45)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, #fff200 0%, #fff200 50%, #e6d200 100%)',
  }),
}));

const icons: { [index: string]: React.ReactElement } = {
  1: <CallReceivedRoundedIcon />,
  2: <RoundaboutRightRoundedIcon />,
  3: <WhereToVoteRoundedIcon />,
  4: <VerifiedRoundedIcon />
}

const StepIcon = ({ active, completed, className, icon }: StepIconProps) => {
  return (
    <StepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </StepIconRoot>
  );
}

export const ParcelDetails = () => {
  return (
    <Stack sx={{ px: 2, boxSizing: 'border-box' }}>
      <Stepper alternativeLabel activeStep={2} connector={<Connector />}>
        <Step>
          <StepLabel StepIconComponent={StepIcon}>
            <h4>Parcel Received</h4>
          </StepLabel>
        </Step>
        
        <Step>
          <StepLabel StepIconComponent={StepIcon}>
            <h4>Parcel in Route </h4>
          </StepLabel>
        </Step>
        
        <Step>
          <StepLabel StepIconComponent={StepIcon}>
            <h4>Parcel Ready for collection</h4>
          </StepLabel>
        </Step>
        
        <Step>
          <StepLabel StepIconComponent={StepIcon}>
            <h4>Parcel Collected</h4>
          </StepLabel>
        </Step> 
      </Stepper>
    </Stack>
  );
}