import {
  HOME_UTILS,
} from '../../../../src/features/home/redux/constants';

import {
  utils,
  reducer,
} from '../../../../src/features/home/redux/utils';

describe('home/redux/utils', () => {
  it('returns correct action by utils', () => {
    expect(utils()).toHaveProperty('type', HOME_UTILS);
  });

  it('handles action type HOME_UTILS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_UTILS }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
