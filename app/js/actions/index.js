import axios from 'axios';
import { ACTION_TYPES } from '../constants/index';

export function login() {
   axios.get('login://');

   return {
     type: ACTION_TYPES.REDIRECT,
     payload: true
   }
};

export function tweet(memmory) {
  const request = axios.post('tweet://' + memmory).then((data) => {
    return data.status;
  });

  return {
    type: ACTION_TYPES.TWEET,
    payload: request
  };
};
