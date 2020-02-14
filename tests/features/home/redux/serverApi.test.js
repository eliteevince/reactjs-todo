import {
  HOME_SERVER_API,
} from '../../../../src/features/home/redux/constants';

import {
  serverApi,
  reducer,
} from '../../../../src/features/home/redux/serverApi';

describe('home/redux/serverApi', () => {
  it('returns correct action by serverApi', () => {
    expect(serverApi()).toHaveProperty('type', HOME_SERVER_API);
  });

  it('handles action type HOME_SERVER_API correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_SERVER_API }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
