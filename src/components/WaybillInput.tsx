import React, { useRef, useState } from 'react';
import { IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export const WaybillInput = ({ setStatus }: { setStatus: React.Dispatch<React.SetStateAction<'HIDE' | 'LOADING' | 'SHOW'>> }) => {
  const [error, setError] = useState('');
  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const waybill = inputRef.current?.value as string;
    console.log(waybill);
    
    if (!(/PAR\d{10}/.test(waybill))) {
      setError('Please enter a valid waybill of this format `PARxxxxxxxxxx` where x is any digit');
      setStatus('HIDE');
      return;
    }

    setError('');
    setStatus('LOADING');

    setTimeout(() => {
      setStatus('SHOW');
    }, 3000);
  }
  
  return (
    <>
      <h2 style={{ marginBottom: 8 }}>Track your parcel</h2>
      <Typography sx={{ color: '#898989', textAlign: 'center', px: 2 }}>Track your order by entering your waybill number</Typography>

      <TextField
        label="Enter Tracking Code"
        helperText={error}
        error={error !== ''}
        sx={{ mt: 4, width: 500, maxWidth: 'calc(100% - 32px)', '& .MuiInputBase-root': { paddingInlineEnd: 0 } }}
        onKeyPress={e => {
          if (e.key !== 'Enter') return;
          handleSearch();
          e.preventDefault();
        }}
        inputProps={{
          ref: inputRef,
        }}
        InputProps={{
          endAdornment:
            <InputAdornment position='end'>
              <IconButton onClick={handleSearch} sx={{ backgroundColor: 'secondary.main', '&:hover': { backgroundColor: 'secondary.main' }, borderRadius: 0, width: 56, height: 56 }}>
                <SearchRoundedIcon />
              </IconButton>
            </InputAdornment>
        }}
      />
    </>
  );
}