import { ACTION_TYPES } from '../constants/index';

export default function(state = false, action) {
  switch (action.type) {
    case ACTION_TYPES.REDIRECT:
      return action.payload;
    default:
     return state;
  };
};
