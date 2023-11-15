import React from 'react';
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';

export const CreateRoomPage = () => {
  const defaultVotes = 2; 
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4"> 
          Create a Music Room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset"> 
          <FormHelperText>
              Guest Control of Playback State
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};
