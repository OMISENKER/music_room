import React, { useState } from 'react';
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import { Link } from 'react-router-dom';

export const CreateRoomPage = () => {
  const defaultVotes = 2; 

  const [state, setState] = useState({
    guestCanPause: true,
    votesToSkip: defaultVotes,
  });

  const handleVotesChange = (e) => {
    setState({
      ...state,
      votesToSkip: parseInt(e.target.value) || 1,
    });
  };

  const handleGuestCanPauseChange = (e) => {
    setState({
      ...state,
      guestCanPause: e.target.value === 'true',
    });
  };

  const handleRoomButtonClicked = () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      votes_to_skip: state.votesToSkip,
      guest_can_pause: state.guestCanPause,
    }),
  };

  fetch('/api/create-room', requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };

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
          <RadioGroup
            row
            value={state.guestCanPause.toString()}
            onChange={handleGuestCanPauseChange}
          >
            <FormControlLabel
              value="true"
              control={<Radio color="primary" />}
              label="Play/Pause"
              labelPlacement='bottom'
            />
            <FormControlLabel
              value="false"
              control={<Radio color="secondary" />}
              label="No Control"
              labelPlacement='bottom'
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl>
          <TextField
            required={true}
            type='number'
            defaultValue={state.votesToSkip}
            onChange={handleVotesChange}
            InputProps={{
              inputProps: {
                min: 1,
                style: { textAlign: "center" },
              },
            }}
          />
          <FormHelperText>
            Votes Required to Skip Song
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color='primary' variant='contained' onClick={handleRoomButtonClicked}>
            Create A Room
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color='secondary' variant='contained' to="/" component={Link}>
            Back
        </Button>
      </Grid>
    </Grid>
  );
};
