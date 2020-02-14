import initialState from './initialState';
import { reducer as serverApiReducer } from './serverApi';
import { reducer as utilsReducer } from './utils';

const reducers = [
  serverApiReducer,
  utilsReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
