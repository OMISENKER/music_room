import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Room = () => {
    const [state, setState] = useState({
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false,
    });
    const { roomCode } = useParams();

    useEffect(() => {
    const getRoomDetails = async () => {
      try {
        const response = await fetch(`/api/get-room?code=${roomCode}`);
        const data = await response.json();

        setState({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause,
          isHost: data.is_host,
        });
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };

    getRoomDetails(); 

    }, [roomCode]);

    return (
        <div>
            <h1>Room Code: {roomCode}</h1>
            <p>Votes to skip: {state.votesToSkip}</p>
            <p>Guest can pause: {state.guestCanPause.toString()}</p>
            <p>Host: {state.isHost.toString()}</p>

        </div>
    )
}
