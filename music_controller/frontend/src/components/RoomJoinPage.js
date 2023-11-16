import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export const RoomJoinPage = (props) => {
  const [state, setstate] = useState({
    roomCode: "",
    error: "",
  });

  const navigate = useNavigate();

  const handleTextFieldChange = (e) => {
    setstate({
      roomCode: e.target.value
    })
  }

  const enterRoomButtonClicked = () => {

  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align='center'>
        <Typography variant='h4' component={'h4'}>
          Join a Room
        </Typography>
      </Grid>
      <Grid item xs={12} align='center'>
        <TextField
          error={state.error}
          label='Code'
          placeholder='Enter a Room Code'
          value={state.roomCode}
          helperText={state.error}
          variant='outlined'
          onChange={handleTextFieldChange}
        />
      </Grid>
      <Grid item xs={12} align='center'>
        <Button
          variant='contained'
          color='primary'
          onClick={enterRoomButtonClicked}
        >
          Enter Room
        </Button>
      </Grid>
      <Grid item xs={12} align='center'>
        <Button
          variant='contained'
          color='secondary'
          to='/'
          component={Link}
        >
          Back
        </Button>
      </Grid>
    </Grid>
  )
}
