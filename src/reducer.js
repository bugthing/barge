import {List, Map, fromJS} from 'immutable';
import uuid from 'node-uuid'

const initial_state = fromJS({ suites: [] });

export default function reducer(state = initial_state, action) {
  switch (action.type) {
  case 'SET_STATE':
    return state;
  case 'NEW_SUITE':
    const newSuite = { id: uuid.v4() };

    return state.updateIn(['suites'], arr => arr.push(newSuite));
  case 'LOAD_SUITE':
  //case 'UPDATE_SUITE_NAME':
  //case 'DELETE_SUITE':
  //case 'LOAD_CONTAINER':
  //case 'UPDATE_CONTAINER_NAME':
  //case 'DELETE_CONTAINER':
  //case 'NEW_LINK':
  //case 'UPDATE_LINK_SOURCE':
  //case 'UPDATE_LINK_ALIAS':
  //case 'DELETE_LINK':
  }
  return state;
}

