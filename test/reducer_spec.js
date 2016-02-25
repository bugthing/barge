import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
  it('handles NEW_SUITE', () => {
    const initialState = fromJS({ suites: [{}] });
    const action = { type: 'NEW_SUITE' };
    const nextState = reducer(initialState, action);

    expect(nextState.get('suites').size).to.equal(2)
  });
});
