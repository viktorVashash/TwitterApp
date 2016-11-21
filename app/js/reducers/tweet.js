import { ACTION_TYPES } from '../constants/index';

export default function(state = false, action) {
  switch (action.type) {
    case ACTION_TYPES.TWEET:
      return action.payload === 200 ? true : state;
    default:
      return state;
  }
};
